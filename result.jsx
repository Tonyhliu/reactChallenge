import React from 'react';

// const Result = ({name, value}) => {
//
//   return(
//     <tr className="result-data">
//       <td className="result-td">
//         {name} = {value}
//       </td>
//     </tr>
//   );
// };

class Result extends React.Component {
  constructor() {
    super();
  };

  render() {
    let name = this.props.name
    let value;
    if (this.props.name instanceof Array) {
      name = this.props.name.map(country => {
        return <li key={country}>{country}</li>
      })
    }

    return(
      <div>
        <div className="result-value">
          <div className="result-name">
            {name} = {this.props.value}
          </div>
        </div>
      </div>
    )
  }
}

export default Result;
