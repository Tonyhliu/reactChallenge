import React from 'react';
import ReactDOM from 'react-dom';
var data = require('multi-json?cwd=node_modules/cldr-misc-full/main&glob=**/*.json!./irrelevant.placeholder');


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      query: "",
      results: [],
      data: data
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  componentDidMount() {
    this.setState({ data: data })
  }

  _handleSubmit() {
    // let data = this.state.data
    let property = this.state.query
    let matches = []
    for (var prop in data) {
      let curr = prop
      matches[curr] = data[prop].delimiters.main[curr].delimiters[property];
    }

    this.setState({ results: [matches] }, function() {
      console.log(this.state);
    });
    // console.log(this.state.results);

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
    // console.log(this.state.results);
    let searchResults;
    if (this.state.results !== []) {
      searchResults = <div>TESTING</div>
    } else {
      searchResults = this.state.results
    }

    return(
      <div>
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
        <div className="results-index">
          <span>
            {searchResults}
          </span>
        </div>
      </div>
    )
  }
};

export default App;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("root"));
})
