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
      invalid: false,
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

  _handleSubmit() {
    let validProps = ['quotationStart', 'quotationEnd', 'alternateQuotationStart', 'alternateQuotationEnd']
    let property = this.state.query
    if (!validProps.includes(property)) {
      this.setState({invalid: true});
    } else {
      let matches = [];
      for (var prop in data) {
        let curr = prop;
        matches.push([curr, data[prop].delimiters.main[curr].delimiters[property]]);
      }

      this.setState({ results: [matches], invalid: false, sort: false });
    }

    // console.log(json.main);
    // var moveFrom = "./node_modules/cldr-misc-full/main/af/delimiters.json";
    // var test = filesystem.readFileSync(moveFrom, 'utf8')
    // console.log(cldr);

    // let results = [];
    // filesystem.readdireSync(dir).forEach(function(file) {
    //   results << file
    // })
    // return results

    // fs.readFile('package', 'utf8', function() {
    //   console.log("made it");
    // })

    // console.log(json);
  }

  render() {
    let searchResults, sortResults, values;
    let sort = false;
    if (this.state.results.length === 0) {
      searchResults = <div></div>
      sortResults = <div></div>
    } else if (!this.state.sort) {
      sortResults = <div onClick={this._handleSort}
                        className="sort-button">Sort</div>

      let that = this
      let countries;
      searchResults = this.state.results[0].map( (resultArr) => (
        <Result name={resultArr[0]}
          value={resultArr[1]}
          key={resultArr}/>
      ));
    } else if (this.state.sort) {
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
      values = <div className="search-results-ul">
        {searchResults}
      </div>
    } else {
      values = <div>
        {searchResults}
      </div>
    }

    return(
      <div className="main">
        <h2>Look up attributes from the CLDR!</h2>
        <div className="input-container">
          <input type="search"
                  placeholder="Type in a property name..."
                  className="input-search-bar"
                  value={this.state.query}
                  onInput={this._handleInput}>
          </input>
          <input type="submit"
                  className="submit-button"
                  onClick={this._handleSubmit}>

          </input>
        </div>

        <div className="results-table">
          <div>
            <div>
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
