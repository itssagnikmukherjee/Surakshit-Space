import Upload from "./artifacts/contracts/Upload.sol/Upload.json";

import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";

import { useDropzone } from "react-dropzone";
import { FcUpload } from "react-icons/fc";
import UploadFile from "./components/UploadFile";

// import "./App.css";
function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "Your Contract Address Here";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <>
      <div className="bg-black pb-60">
        <h1 className="text-center pt-20 text-6xl font-bold text-white">
          WELCOME, <span className="text-green-500">ANONYMOUS</span>
        </h1>
        <h2 className="text-3xl text-center mt-6 font-medium text-white">
          Upload your files securely here and share them amongst people easily.
        </h2>
        <div className="p-10 absolute left-10 top-[65%]">
          <div
            className="w-0 h-0 blur-sm backdrop:blur-lg
    border-t-[60px] border-t-transparent
    border-l-[180px] border-l-gray-900
    border-b-[60px] border-b-transparent
    "
          ></div>
        </div>
        <div className="p-2 absolute left-10 top-[60%]">
          <div
            class="w-0 h-0 blur-sm backdrop:blur-lg
  border-t-[80px] border-t-transparent
  border-l-[200px] border-l-gray-600
  border-b-[80px] border-b-transparent
  "
          ></div>
        </div>

        <div className="flex justify-center items-center mt-20">
          <UploadFile contract={contract} account={account}/>
          <div className="p-40 absolute top-60 right-0">
            <div
              className="w-0 h-0 blur-sm
    border-t-[60px] border-t-transparent
    border-r-[60px] border-r-indigo-300
    border-b-[60px] border-b-transparent
    "
            ></div>
          </div>
        </div>
      </div>
      {/* <div className="App">
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div> */}
    </>
  );
}

export default App;
