import React from 'react';

class Result extends React.Component {
  constructor() {
    super();
  };

  render() {
    let name = <div className="country-name">
                  {this.props.name}
                </div>
    let value = <div className="result-value">
                  = {this.props.value}
                </div>
    if (this.props.name instanceof Array) {
      name = this.props.name.map(country => {
        return <div key={country}
                  className="country-names">{country}</div>
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
