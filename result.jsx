import React from 'react';

const Result = ({name, value}) => {
  return(
    <tr className="result-data">
      <td>
        {name} = {value}
      </td>
    </tr>
  );
};

export default Result;
