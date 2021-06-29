import React, { useState, useEffect } from "react";

const TableComponent = ({ data }) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      console.log("File Data: ", data);
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
            data.map((item) => (
              <tr>
                <td key={item.Task + Math.random() * 1000}>{item.Task}</td>
                <td key={item.Project + Math.random() * 1000}>
                  {item.Project}
                </td>
                <td key={item.Person + Math.random() * 1000}>{item.Person}</td>
                <td key={item.Total + Math.random() * 1000}>{item.Total}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
