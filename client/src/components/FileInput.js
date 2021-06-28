import React, { useState, useEffect } from "react";

const FileInput = () => {
  const [file, setFile] = useState("");
  const handleFile = (e) => {
    e.preventDefault();

    const fileData = e.target.files[0];

    // Set file sate
    setFile(fileData);

    if (fileData) {
      console.log(file);
    }

    fileHandler(fileData);
  };

  useEffect(() => {
    if (file) {
      console.log('File loaded', file);
    }
  }, []);

  const fileHandler = async (file) => {

    // Create FileReader and read as Array Buffer
    const fileReader = new FileReader();
    await fileReader.readAsArrayBuffer(file);

    // When file is loaded create buffer
    fileReader.onload = (e) => {
      const bufferArray = e.target.result;
      console.log("Buffer Array", bufferArray);
    };

  };

  return (
    <div className="container">
      <form action="" className="form">
        <label htmlFor="file">File</label>
        <input
          type="file"
          name="file"
          id="file"
          className="file-input"
          onChange={handleFile}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileInput;
