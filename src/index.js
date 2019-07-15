import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact:
        "Chuck Norris can text using his walkie talkie and without batteries.",
      category: []
    };
    this.getFact = this.getFact.bind(this);
  }
  // Get random Shuck Norris facts.
  getFact() {
    axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then(response => {
        this.setState({ fact: response.data.value });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    const url = "https://api.chucknorris.io/jokes/random?category={category}";
    axios.get(url).then((response, next) => {
      response.map((category, index, err) => {
        if (category) {
          category.toString();
        } else {
          response.catch(console.log(err));
        }
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 id="title">CHUCK NORRIS FACTS</h1>
        <h3 id="fact">{'" ' + this.state.fact + '"'}</h3>
        <h2>{this.categories}</h2>
        <div className="row">
          <button className="btn btn-primary moreFact" onClick={this.getFact}>
            MORE FACTS
          </button>
          <button
            type="submit"
            className=" btn btn-default category"
            onClick={this.category}
          >
            CATEGORIES
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
