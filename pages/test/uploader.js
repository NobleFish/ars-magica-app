import React from 'react';
import UploadJSON from '../../components/utility/uploadJSON';

const TestUploader = () => {

    function deleteItemFromLocalStorage(key) {
        localStorage.removeItem(key);
    }

    function logItemFromLocalStorage(key) {
        console.log(localStorage.getItem(key));
    }

  return (
    <div>
      <h1>Test Uploader</h1>
      <button onClick={() => logItemFromLocalStorage('testStorage')}>Log testStorage</button>
      <button onClick={() => deleteItemFromLocalStorage('testStorage')}>Delete testStorage</button>
      <UploadJSON storageName="testStorage" />
    </div>
  );
};

export default TestUploader;
