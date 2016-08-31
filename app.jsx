'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

// import result from './jsonData.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  componentDidMount() {

  }

  _handleSubmit() {

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
    )
  }
};

export default App;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("root"));
})
