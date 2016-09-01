import React from 'react';
import ReactDOM from 'react-dom';
import Result from './result';
import SortResult from './sortResult';
var data = require('multi-json?cwd=node_modules/cldr-misc-full/main&glob=**/*.json!./irrelevant.placeholder');


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      query: "",
      results: [],
      data: data,
      sort: false
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleSort = this._handleSort.bind(this);
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  _handleSort() {
    let arr = this.state.results[0];
    let obj = {}
    let matches = []
    arr.forEach(arr => {
      if (arr[1] in obj) {
        obj[arr[1]].push(arr[0])
      } else {
        obj[arr[1]] = [arr[0]];
      }
    });

    Object.keys(obj).forEach(mark => {
      matches.push([obj[mark], mark])
    })

    this.setState({ results: [matches], sort: true });
  }

  componentDidMount() {
    this.setState({ data: data })
  }

  _handleSubmit(e) {
    let property = e.target.innerHTML
    let matches = [];
    for (var prop in data) {
      let curr = prop;
      matches.push([curr, data[prop].delimiters.main[curr].delimiters[property]]);
    }

    this.setState({ results: [matches], sort: false, query: property });
  }

  render() {
    let searchResults, sortResults, values, currentProp;
    let sort = false;
    if (this.state.results.length === 0) {
      searchResults = <div></div>
      sortResults = <div></div>
      currentProp = <div></div>
    } else if (!this.state.sort) {
      currentProp = <h3>Current property: {this.state.query}</h3>
      sortResults = <div onClick={this._handleSort}
                        className="sort-button">Sort By Symbols</div>

      let that = this
      let countries;
      searchResults = this.state.results[0].map( (resultArr) => (
        <Result name={resultArr[0]}
          value={resultArr[1]}
          key={resultArr}/>
      ));
    } else if (this.state.sort) {
      currentProp = <h3>Current property: {this.state.query}</h3>
      sort = true;
      searchResults = this.state.results[0].map( (resultArr) => (
        <SortResult name={resultArr[0]}
          value={resultArr[1]}
          key={resultArr} />
      ));
    }

    if (this.state.invalid) {
      searchResults = <div>Invalid properties. Try "quotationStart", "quotationEnd", "alternateQuotationStart", "alternateQuotationEnd"</div>
    };

    if (sort) {
      values = <div>
        <h3>Click on one of the symbols below to see the countries that share the property</h3>
        <div className="search-results-ul">
            {searchResults}
        </div>
      </div>
    } else {
      values = <div className="search-results-div">
        {searchResults}
      </div>
    }

    return(
      <div className="main">
        <h2>Look up attributes from the Common Locale Data Repository (CLDR)!</h2>
        <div className="input-container">

            <div onClick={this._handleSubmit}
              className="sort-button qs">quotationStart
            </div>
            <div onClick={this._handleSubmit}
              className="sort-button qe">quotationEnd</div>
            <div onClick={this._handleSubmit}
              className="sort-button aqs">alternateQuotationStart</div>
            <div onClick={this._handleSubmit}
              className="sort-button aqe">alternateQuotationEnd</div>

        </div>

        <div className="results-table">
          <div>
            <div>
              {currentProp}
              <div>
                {sortResults}
              </div>
            </div>
            {values}
          </div>
        </div>

      </div>
    )
  }
};

export default App;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("root"));
})
