import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Streams from "./pages/Streams";
import Recipient from "./pages/Recipient";
import { WalletProvider } from "./components/wallet-connect/Walletcontext";

export default function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="streams" element={<Streams />} />
            <Route path="recipient" element={<Recipient />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}
