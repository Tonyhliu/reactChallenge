import React from 'react';

class SortResult extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this._showResults = this._showResults.bind(this);
  };

  _showResults() {
    this.setState({ show: !this.state.show });
  }

  render() {
    let name = <div></div>
    if (this.state.show) {
      name = this.props.name.map(country => {
          return <li key={country}
                    className="country-names">{country}</li>
                });
    }

    let value = <div className="results-value"
                      onClick={this._showResults}>
                    {this.props.value}
                  </div>

    return(
        <div className="results">
          <div className="result-name">
            <div className="">
              {value}
            </div>
            <div>
              {name}
             </div>
          </div>
        </div>
    )
  }
}

export default SortResult;
