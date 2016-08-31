import React from 'react';
import ReactDOM from 'react-dom';
var data = require('multi-json?cwd=node_modules/cldr-misc-full/main&glob=**/*.json!./irrelevant.placeholder');


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      query: "",
      data: {},
      results: []
    };
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  componentDidMount() {

    // this.resultsListener
    // this.state = { data: data, results: [] }
    // let a = this.state.data
    // let results = []
    // for (var prop in a) {
    //   // results.push({prop: ""})
    //   // console.log(prop);
    //   // console.log(a[prop].delimiters);
    //   let curr = prop
    //   console.log(a[prop].delimiters.main[curr].delimiters);
    //   // console.log(a[prop].delimiters.main.prop.delimiters);
    //   // console.log(a[prop][delimiters]);
    // }


    // let keys = Array.prototype.slice.apply(this, Object.keys(a));
    // console.log(keys);
    // console.log(keys[0]);
    // console.log(a.keys[0]);
    // for (let i = 0; i < keys.length; i++) {
    //   console.log(a.keys[i]);
    // }
  }

  _handleSubmit() {

    let data = this.state.data
    let property = this.state.query
    let matches = []
    for (var prop in data) {
      let curr = prop
      // results[curr] = data[prop].delimiters.main[curr].delimiters;
      matches[curr] = data[prop].delimiters.main[curr].delimiters[property];
    }
    console.log(matches);
    // console.log(this.state);
    // debugger
    this.setState({ results: matches })
    console.log(this.state);

    // console.log(this.state.query);
    // console.log(results);
    // alert(json)
    // console.log(json);
    // console.log(data);

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
    return(
      <div>
        <div className="input-container">
          <input type="search"
                  placeholder="Type in a property name..."
                  className="input-search-bar"
                  onInput={this._handleInput.bind(this)}>
          </input>
          <input type="submit"
                  className="submit-button"
                  onClick={this._handleSubmit.bind(this)}>

          </input>
        </div>
        <div className="results-index">
        </div>
      </div>
    )
  }
};

export default App;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("root"));
})
