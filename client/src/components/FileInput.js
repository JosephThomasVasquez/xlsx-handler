import React, { useState } from "react";

const FileInput = () => {
  const [file, setFile] = useState("");
  const handleFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file)
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
