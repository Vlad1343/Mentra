import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import RoleSelect from "./pages/RoleSelect";
import AvatarSelection from "./pages/AvatarSelection";
import SessionSetup from "./pages/SessionSetup";
import Interview from "./pages/Interview";
import Feedback from "./pages/Feedback";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";
import BeyondPresenceDemo from "./pages/BeyondPresenceDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/role-select" element={<RoleSelect />} />
          <Route path="/avatar" element={<AvatarSelection />} />
          <Route path="/setup" element={<SessionSetup />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/beyond-presence-demo" element={<BeyondPresenceDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
