import React from 'react';

class Result extends React.Component {
  constructor() {
    super();
  };

  render() {
    let name = <li className="country-name">
                  {this.props.name}
                </li>
    let value = <div className="result-value">
                  = {this.props.value}
                </div>
    if (this.props.name instanceof Array) {
      name = this.props.name.map(country => {
        return <li key={country}
                  className="country-names">{country}</li>
      })
      value = <div className="results-value">
                    = {this.props.value}
              </div>
    }

    return(
      <div>
        <div className="results">
          <div className="result-name">
            <div>
              {name}
            </div>
            <div>
               {value}
             </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Result;
