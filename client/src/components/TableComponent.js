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
                <th className="item-table-headers" key={index}>
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
                <td className="item-table-data">{Object.values(item)[5]}</td>
                <td className="item-table-data">{Object.values(item)[6]}</td>
                <td className="item-table-data">{Object.values(item)[7]}</td>
                <td className="item-table-data">{Object.values(item)[8]}</td>
                <td className="item-table-data">{Object.values(item)[9]}</td>
                <td className="item-table-data">{Object.values(item)[10]}</td>
                <td className="item-table-data">{Object.values(item)[11]}</td>
                <td className="item-table-data">{Object.values(item)[12]}</td>
                <td className="item-table-data">{Object.values(item)[13]}</td>
                <td className="item-table-data">{Object.values(item)[14]}</td>
                <td className="item-table-data">{Object.values(item)[15]}</td>
                <td className="item-table-data">{Object.values(item)[16]}</td>
                <td className="item-table-data">{Object.values(item)[17]}</td>
                <td className="item-table-data">{Object.values(item)[18]}</td>
                <td className="item-table-data">{Object.values(item)[19]}</td>
                <td className="item-table-data">{Object.values(item)[20]}</td>
                <td className="item-table-data">{Object.values(item)[21]}</td>
                <td className="item-table-data">{Object.values(item)[22]}</td>
                <td className="item-table-data">{Object.values(item)[23]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
