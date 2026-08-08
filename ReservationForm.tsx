import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICE_OPTIONS } from "@/lib/site-data";

const reservationSchema = z.object({
  name: z.string().min(2, "Zadejte prosím vaše jméno."),
  phone: z.string().min(9, "Zadejte platné telefonní číslo."),
  email: z.string().email("Zadejte platnou e-mailovou adresu."),
  date: z.string().optional(),
  service: z.string({ required_error: "Vyberte prosím službu." }).min(1, "Vyberte prosím službu."),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Pro odeslání formuláře je nutný souhlas se zpracováním osobních údajů.",
  }),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      service: "",
      message: "",
      consent: false,
    },
  });

  // TODO: Napojit na backend / e-mailovou službu.
  // Nyní formulář pouze validuje vstupy a simuluje odeslání — struktura dat
  // (ReservationFormValues) je připravena k odeslání na budoucí API endpoint.
  async function onSubmit(values: ReservationFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Rezervační poptávka:", values);
    toast.success("Poptávka byla odeslána. Ozveme se vám co nejdříve.");
    setSubmitted(true);
    form.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-reservation">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-[2px] text-muted-foreground">Jméno</FormLabel>
                  <FormControl>
                    <Input placeholder="Vaše jméno a příjmení" {...field} data-testid="input-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-[2px] text-muted-foreground">Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="+420 ..." {...field} data-testid="input-phone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-[2px] text-muted-foreground">E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="vas@email.cz" {...field} data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-[2px] text-muted-foreground">
                    Preferované datum
                  </FormLabel>
                  <FormControl>
                    <Input type="date" {...field} data-testid="input-date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-[2px] text-muted-foreground">Služba</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Vyberte službu, o kterou máte zájem" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-[2px] text-muted-foreground">
                  Zpráva (nepovinné)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Napište nám vše, co bychom měli vědět..."
                    className="min-h-[120px]"
                    {...field}
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="checkbox-consent"
                  />
                </FormControl>
                <div className="leading-tight">
                  <FormLabel className="text-sm font-light text-muted-foreground">
                    Souhlasím se zpracováním osobních údajů.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full md:w-auto px-10 py-4 text-[11px] uppercase tracking-[3px] font-semibold bg-primary text-white transition-all duration-500 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50"
            data-testid="button-submit-reservation"
          >
            {form.formState.isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
          </button>

          {submitted && (
            <p className="text-sm text-primary font-light" data-testid="text-form-success">
              Děkujeme za zprávu — ozveme se vám co nejdříve.
            </p>
          )}
        </form>
      </Form>
    </motion.div>
  );
}
