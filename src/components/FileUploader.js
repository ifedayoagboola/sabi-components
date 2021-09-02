import React, { useState } from "react";
import { ReactComponent as Document } from "../assets/icons/Document.svg";
import Close from "../assets/icons/close-icon.svg";
import Refresh from "../assets/icons/refresh.svg";

const FileUploader = () => {
  const [file, setFile] = useState();

  const uploadFile = (e) => {
    const { files } = e.target;
    setFile(files[0].name);
  };
  return (
    <div>
      <h1 className="text-sm mb-1">Upload your ID card here</h1>
      <div className="bg-UPLOAD_COLOR w-2/6 h-20 flex justify-center items-center rounded">
        <div className="flex items-center justify-center bg-grey-lighter">
          {!file ? (
            <label className="cursor-pointer" htmlFor>
              <span className="text-PRIMARY-_500 text-base leading-normal">
                Click to Upload Image
              </span>
              <span className="text-INPUT_COLOR"> here</span>
              <input onChange={uploadFile} type="file" className="hidden" />
            </label>
          ) : (
            <div className="flex items-center justify-between px-5">
              <Document />
              <div className="ml-4">
                <span className="text-INPUT_COLOR">{file}</span>
                {/* <div className="h-2 mt-2 w-ful bg-gray-100 rounded-full">
                  <div className="h-full w-2/6 bg-PRIMARY-_500 rounded-full" />
                </div> */}
                <span className="font-normal text-xs text-GREEN-_500 block">
                  Upload Successful
                </span>
                {/* <span className="font-normal text-RED-_500 block">
                  Upload Failed
                </span> */}
              </div>
              <div className="flex">
                <button
                  className="w-8 h-8 ml-4 bg-white flex justify-center items-center rounded-full"
                  type="button"
                  onClick={() => setFile(false)}
                >
                  <img src={Refresh} alt="" />
                </button>
                <button
                  className="w-8 h-8 ml-2 bg-NEUTRAL-_200 flex justify-center items-center rounded-full"
                  type="button"
                  onClick={() => setFile(false)}
                >
                  <img src={Close} alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
