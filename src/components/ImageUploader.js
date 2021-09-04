// /* eslint-disable jsx-a11y/label-has-associated-control */
 import React, { useState } from "react";
 import { redTrash, addCircle } from "../assets/icons";
 
 const ImageUploader = () => {
   const [selectedImages, setSelectedImages] = useState([]);
   
   const imageHandleChange = (e) => {
     if (e.target.files) {
       const fileArray = Array.from(e.target.files).map((file) =>
       URL.createObjectURL(file)
       );
       setSelectedImages((prevImages) => prevImages.concat(fileArray));
       Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      }
    };
    
    const deletePreviewImage = (image) => {
      const newArray = selectedImages.filter((item) => item !== image);
      setSelectedImages(newArray);
    };

    /* eslint-disable arrow-body-style */
    /* eslint-disable react/jsx-key */
    const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <div className="ml-4 bg-UPLOAD_COLOR w-20 border h-20 rounded cursor-pointer relative">
          <img
            className="h-full w-full object-cover"
            src={photo}
            key={photo}
            alt=""
          />
          <div
            className="flex justify-center items-center h-4 w-4 absolute right-0.5 top-0.5 rounded-full bg-white"
            onClick={() => {
              deletePreviewImage(photo);
            }}
            aria-hidden="true"
          >
            <img src={redTrash} alt={photo} />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="flex">
      <div className="bg-UPLOAD_COLOR w-20 border border-dashed border-PRIMARY-_500 h-20 flex justify-center items-center rounded">
        <div className="flex items-center justify-center bg-grey-lighter">
          <label className="cursor-pointer">
            <span className="text-PRIMARY-_500 text-base leading-normal">
              <img src={addCircle} alt="" />
            </span>
            <input
              onChange={imageHandleChange}
              multiple
              type="file"
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="ml-2 flex">{renderPhotos(selectedImages)}</div>
    </div>
  );
};

export default ImageUploader;
