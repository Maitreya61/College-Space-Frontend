// UploadButton.js
import React from 'react';

const UploadButton = ({ handleClick, buttonText }) => {
  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {buttonText}
    </button>
  );
};

export default UploadButton;
