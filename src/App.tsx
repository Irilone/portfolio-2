
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BaseLayout } from "./layouts/BaseLayout";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            {/* Skip Link for Keyboard Users */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <BaseLayout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/case-study/:id" element={<CaseStudy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BaseLayout>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
