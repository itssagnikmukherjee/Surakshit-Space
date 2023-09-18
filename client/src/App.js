import Navbar from "./components/Navbar";
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
        </Routes>
      </BrowserRouter>
    </ContractContextProvider>
  );
}
