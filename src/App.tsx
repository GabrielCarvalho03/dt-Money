import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransitionModal } from "./components/newTransitionModal";
import { TransationProvider } from "./components/context/TransationsContext";

export function App() {
  const [isNewTransitionModal, setIsNewTransitionModal] = useState(false);

  
  return (
    <TransationProvider>
      <Header onOpenNewTransitionModal={() => setIsNewTransitionModal(true)} />
      <Dashboard />
 
     <NewTransitionModal isOpen={isNewTransitionModal} requestClose={()=>setIsNewTransitionModal(false)} />
      
      <GlobalStyle />
    </TransationProvider>
  );
}
