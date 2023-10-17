import React from "react";

const Columns = ({ headers }) => {
  return (
    <tr>
      {headers?.map((item, index) => (
        <th key={index} scope="col" className="px-4 py-3">
          {item}
        </th>
      ))}
    </tr>
  );
};

export default Columns;
