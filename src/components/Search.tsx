import * as React from "react";

interface SearchState {
  input: string;
}

interface SearchProps {
  history: { push: Function };
  location: { pathname: string };
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { input: "" };
  }
  handleChange = (evt: { target: { value: string } }): void => {
    this.setState({ input: evt.target.value });
  };
  handleSubmit = (): void => {
    this.props.history.push(`/users/search/${this.state.input}`);
  };
  handleClear = (): void => {
    this.setState({ input: "" });
    this.props.history.push("/users");
  };
  disabled = (button: string): boolean => {
    return button === "submit"
      ? !this.state.input.length
      : !this.props.location.pathname.includes("search") &&
          !this.state.input.length;
  };
  render() {
    return (
      <div className="m-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.input}
            placeholder="Search"
            onChange={this.handleChange}
          />
          <div className="input-group-append" style={{ marginLeft: "2px" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
              disabled={this.disabled("search")}
            >
              Go
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleClear}
              disabled={this.disabled("clear")}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
