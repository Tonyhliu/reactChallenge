import React from 'react';

class Result extends React.Component {
  constructor() {
    super();
  };

  render() {
    let name = <li className="country-name">
                  {this.props.name}
                </li>
    // let value = <li className="result-value">
    //               {this.props.value}
    //             </li>
    if (this.props.name instanceof Array) {
      name = this.props.name.map(country => {
        return <li key={country}
                  className="country-names">{country}</li>
      })
    }

    return(
      <div>
        <div className="results">
          <div className="result-name">
            <div>
              {name}
            </div>
            <div>
               <li className="result-value">
                 = {this.props.value}
               </li>
             </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Result;
