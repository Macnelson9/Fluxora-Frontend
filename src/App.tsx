import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Streams from "./pages/Streams";
import Recipient from "./pages/Recipient";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="streams" element={<Streams />} />
          <Route path="recipient" element={<Recipient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
