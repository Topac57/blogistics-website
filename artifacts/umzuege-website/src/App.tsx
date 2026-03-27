import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { FAQ } from "@/pages/FAQ";
import { Impressum } from "@/pages/Legal/Impressum";
import { Datenschutz } from "@/pages/Legal/Datenschutz";
import { AGB } from "@/pages/Legal/AGB";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// In a Vite setup where the base URL is provided dynamically:
const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter basename={base}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/leistungen" element={<Services />} />
                <Route path="/leistungen/:slug" element={<ServiceDetail />} />
                <Route path="/ueber-uns" element={<About />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
