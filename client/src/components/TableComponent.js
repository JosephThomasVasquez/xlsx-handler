import React, { useState, useEffect } from "react";

const TableComponent = ({ data }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("File Data: ", data);

      const headerData = Object.keys(data[0]);
      if (headerData) {
        setTableHeaders(headerData);
        console.log("Table Headers", tableHeaders);
      }
      setDataLoaded(true);
    }
  }, []);
  return (
    <div>
      <table className="table-view">
        <tbody>
          <tr>
            {tableHeaders &&
              tableHeaders.map((header, index) => (
                <th className="item-table-data" key={index}>
                  {header}
                </th>
              ))}
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
