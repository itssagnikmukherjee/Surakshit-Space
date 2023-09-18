import { createContext, useContext, useState } from "react";

const ContractContext = createContext();

export const useContract = () => useContext(ContractContext);
export default function ContractContextProvider({ children }) {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  return (
    <ContractContext.Provider
      value={{
        account,
        setAccount,
        contract,
        setContract,
        provider,
        setProvider,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}
