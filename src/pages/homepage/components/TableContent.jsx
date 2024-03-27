import React from "react";
import { tableData } from "../../../utils/data/Data"; // Import table data

const columns = ["Source", "Amount", "Status", "User", "Joined"]; // Table column definitions

const Table = () => {
  return (
    <div className="mx-4 xs:mx-10 bg-white overflow-x-auto border rounded-xl mb-8">
      <div className="bg-white p-4 text-lg font-medium rounded-xl">
        Installed Apps {/* Title for the table */}
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            {/* Create table headers dynamically */}
            {columns.map((column) => (
              <th key={column} className="px-4 py-4">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows from provided data */}
          {tableData.map((row) => (
            <tr key={row.Source} className="border-b hover:bg-gray-200">
              {/* Render table cells based on column and data */}
              {columns.map((column) => (
                <td key={column} className="px-4 py-4">
                  {
                    column === "Status" ? (
                      <span
                        className={`rounded-full px-2 py-1 text-center text-xs font-semibold 
                                ${
                                  row.Status === "Active"
                                    ? "text-green-500 bg-green-100"
                                    : row.Status === "Pending"
                                    ? "text-yellow-500 bg-yellow-100"
                                    : "text-red-500 bg-red-100"
                                }`}
                      >
                        {row.Status} {/* Display status value */}
                      </span>
                    ) : column == "Source" ? (
                      <div className="flex items-center space-x-2">
                        <img
                          src={row[column].imgUrl}
                          className="h-8 w-8 p-1 bg-slate-100 rounded-lg mr-2"
                          alt="Logo"
                        />
                        {row[column].name}
                      </div>
                    ) : (
                      row[column]
                    ) // Access data for other columns
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
