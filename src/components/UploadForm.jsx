// UploadForm.js
import React from 'react';

const UploadForm = ({name, itemName, setItemName, chapterOrPaperName, setChapterOrPaperName, itemLink, setItemLink }) => {
  return (
    <div className="mt-4 px-6 py-4 bg-gray-100 rounded-md">
      <label htmlFor="itemName">Subject Name:</label>
      <input
        id="itemName"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="block w-full p-2 border rounded-md mb-4"
        required={true}
      />

      <label htmlFor="chapterOrPaperName">{name} Name:</label>
      <input
        id="chapterOrPaperName"
        type="text"
        value={chapterOrPaperName}
        onChange={(e) => setChapterOrPaperName(e.target.value)}
        className="block w-full p-2 border rounded-md mb-4"
        required={true}
      />

      <label htmlFor="itemLink">{name} Link:</label>
      <input
        id="itemLink"
        type="text"
        value={itemLink}
        onChange={(e) => setItemLink(e.target.value)}
        className="block w-full p-2 border rounded-md mb-4"
        required={true}
      />
    </div>
  );
};

export default UploadForm;
