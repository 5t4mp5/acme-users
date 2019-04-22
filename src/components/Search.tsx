import * as React from "react";

interface SearchState {
  input: string;
}

interface SearchProps {
    history: { push: Function};
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
  }
  disabled = (): boolean => !this.state.input.length;
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
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit} disabled={this.disabled()}>Go</button>
            <button type="button" className="btn btn-info" onClick={() => this.setState({ input: "" })} disabled={this.disabled()}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
