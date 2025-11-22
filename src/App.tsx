import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndexSn from "./pages/IndexSn";
import IndexSk from "./pages/IndexSk";
import Thanku from "./pages/Thanku";
import ThankuSn from "./pages/ThankuSn";
import ThankuSk from "./pages/ThankuSk";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sn" element={<IndexSn />} />
          <Route path="/sk" element={<IndexSk />} />
          <Route path="/ty" element={<Thanku/>} />
          <Route path="/ty-sn" element={<ThankuSn/>} />
          <Route path="/ty-sk" element={<ThankuSk/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
