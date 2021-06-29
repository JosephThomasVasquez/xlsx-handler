import React, { useState, useEffect } from "react";

const TableComponent = ({ data }) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      console.log("File Data: ", data);
      console.log(data[0]);
      setDataLoaded(true);
    }
  }, []);
  return (
    <div>
      <table className="table-view">
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>

          {dataLoaded &&
            data.map((item, index) => (
              <tr className="" key={index}>
                <td>{Object.values(item)[0]}</td>
                <td>{Object.values(item)[1]}</td>
                <td>{Object.values(item)[2]}</td>
                <td>{Object.values(item)[3]}</td>
                <td>{Object.values(item)[4]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
