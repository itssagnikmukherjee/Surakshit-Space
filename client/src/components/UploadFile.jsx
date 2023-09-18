import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcUpload } from "react-icons/fc";
import axios from "axios";
import pinataConfig from "../pinataConfig";
import { useContract } from "../context/ContractContextProvider";

export default function UploadFile() {
  const onDrop = useCallback((acceptedFiles) => {
    const data = acceptedFiles[0]; //files array of files object
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(acceptedFiles[0]);
    };
    setFileName(acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const { account, contract } = useContract();
  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        console.log(file);
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: pinataConfig.apiKey,
            pinata_secret_api_key: pinataConfig.secret,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash);
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className=" border-dashed border-white border-2 hover:border-cyan-500 h-60 w-100  flex justify-center items-center cursor-pointer rounded-xl"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <FcUpload style={{ height: "20%", width: "40%" }} />
            <p className="text-white">Drop the files here</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <FcUpload style={{ height: "20%", width: "40%" }} />
            <p className="text-white">Drag'n Drop the files here</p>
          </div>
        )}
      </form>
      <p className="text-white">File Selected : {fileName}</p>
      <p className="text-white">Account : {account}</p>
      <button
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        onClick={handleSubmit}
      >
        Upload File
      </button>
    </div>
  );
}
