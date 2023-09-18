import Files from "./components/Files";
import Navbar from "./components/Navbar";
import Share from "./components/Share";
import ContractContextProvider from "./context/ContractContextProvider";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <ContractContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/files" element={<Files />} />
          <Route path="/share" element={<Share />} />
        </Routes>
      </BrowserRouter>
    </ContractContextProvider>
  );
}
