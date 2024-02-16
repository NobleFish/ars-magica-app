// components/utility/uploadJSON.js
import React, { useState } from 'react';

const UploadJSON = ({ storageName }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/json') {
      setSelectedFile(file);
    } else {
      console.warn('Please select a .json file');
      setSelectedFile(null);
    }
  };
  
  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonData = JSON.parse(event.target.result);
          localStorage.setItem(storageName, JSON.stringify(jsonData));
          console.log(`File uploaded to ${storageName}!`);
        } catch (e) {
          console.error('Invalid JSON file');
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" accept="application/json" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadJSON;
