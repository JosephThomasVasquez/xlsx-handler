import React, { useState, useEffect } from "react";

const TableComponent = ({ data }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [itemRarity, setItemRarity] = useState([
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary",
  ]);

  useEffect(() => {
    if (data) {
      console.log("File Data: ", data);

      const headerData = Object.keys(data[0]);
      if (headerData) {
        setTableHeaders(headerData);
        console.log("Table Headers", tableHeaders);
        console.log(Object.values(data[0]));
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
                {Object.values(item).map((value, index) => (
                  <td
                    className={`item-table-data ${
                      itemRarity.includes(value) && value.toLowerCase()
                    }`}
                    key={index}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
