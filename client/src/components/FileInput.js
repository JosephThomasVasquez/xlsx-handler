import React, { useState, useEffect } from "react";
import * as xlsx from "xlsx";
import TableComponent from "./TableComponent";

const FileInput = () => {
  const [file, setFile] = useState("");

  const handleFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target);

    const fileData = e.target.files[0] || e.dataTransfer.files[0];

    // Set file sate
    // setFile(fileData);

    if (fileData) {
      console.log(file);
    }

    fileHandler(fileData);
  };

  useEffect(() => {
    // if (file) {
    //   console.log("File loaded", file);
    // }
  }, []);

  const fileHandler = (file) => {
    const promise = new Promise((resolve, reject) => {
      // Create FileReader and read as Array Buffer
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      // When file is loaded create buffer
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        console.log("Buffer Array", bufferArray);

        // XLSX AREA -----------------------------------------------------------------------------------------
        // Get Workbook
        const workBook = xlsx.read(bufferArray, { type: "buffer" });
        console.log("workBook: ", workBook);

        // Get Sheet Name
        const workSheet = workBook.SheetNames[0];
        console.log("workSheet: ", workSheet);

        // Sheet
        const data = workBook.Sheets[workSheet];
        console.log("sheet: ", data);

        // Data
        const sheetData = xlsx.utils.sheet_to_json(data);
        const sheetDataWithHeaders = xlsx.utils.sheet_to_json(data, {
          raw: true,
          header: 1,
        });
        console.log("With headers", sheetDataWithHeaders);

        resolve(sheetData);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);

      // Set file sate
      setFile(d);
    });
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
          onDrop={handleFile}
        />
        <button type="submit">Submit</button>
      </form>
      <section className="table-section">
        {file && <TableComponent data={file} />}
      </section>
    </div>
  );
};

export default FileInput;
