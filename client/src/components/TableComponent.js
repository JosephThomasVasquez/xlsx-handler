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
              <tr className="item-table-row" key={index}>
                <td className="item-table-data">{Object.values(item)[0]}</td>
                <td className="item-table-data">{Object.values(item)[1]}</td>
                <td className="item-table-data">{Object.values(item)[2]}</td>
                <td className="item-table-data">{Object.values(item)[3]}</td>
                <td className="item-table-data">{Object.values(item)[4]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
