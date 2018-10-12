import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchs: ""
    };
    this.handleGoogle = this.handleGoogle.bind(this);
    this.updateSearch = this.updateSearch.bind(this); 
  }

  updateSearch(event) {
    this.setState({ searchs: event.target.value });
  }

  handleGoogle() {
    window.open(
      "http://www.google.com/search?q=" + this.state.searchs,
      "_blank"
    );
  }

  render() {
    return (
      <div className="form_box">
        <form
          className=""
          action=""
          method="get"
          id="cse-search-box"
          name="cse-search-box"
          target=""
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Search..."
              id="googleInput"
              value={this.state.searchs}
              onChange={this.updateSearch}
              name="q"
            />
            <div className="input-group-append">
              <button
                onClick={this.updateSearch}
                id="gcs"
                value={this.state.searchs}
                name="q"
                className="btn btn-outline-light"
              >
                Custom
              </button>
              <button
                onClick={this.handleGoogle}
                className="btn btn-outline-light"
                type="button"
              >
                Google
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
