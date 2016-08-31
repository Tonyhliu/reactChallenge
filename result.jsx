import React from 'react';

const Result = ({name, value}) => {
  return(
    <div className={name}>
      {name} = {value}
    </div>
  );
};

export default Result;
