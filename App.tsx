import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Switch, Route } from 'wouter';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import ServicesPage from '@/pages/Services';
import GalleryPage from '@/pages/Gallery';
import PricingPage from '@/pages/Pricing';
import ReservationPage from '@/pages/Reservation';
import ContactPage from '@/pages/Contact';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/o-nas" component={About} />
            <Route path="/sluzby" component={ServicesPage} />
            <Route path="/galerie" component={GalleryPage} />
            <Route path="/galerie/:slug" component={GalleryPage} />
            <Route path="/cenik" component={PricingPage} />
            <Route path="/rezervace" component={ReservationPage} />
            <Route path="/kontakt" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        <Toaster position="top-center" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
