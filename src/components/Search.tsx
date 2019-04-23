import * as React from "react";

interface SearchProps {
  history: { push: Function };
  location: { pathname: string };
  match: { params: { srchVal: string } };
}

class Search extends React.Component<SearchProps, { input: string }> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { input: "" };
  }
  handleChange = (evt: { target: { value: string } }): void => {
    this.setState({ input: evt.target.value });
  };
  handleSubmit = (evt: { preventDefault: Function }): void => {
    evt.preventDefault();
    this.props.history.push(`/users/search/${this.state.input}`);
  };
  handleClear = (): void => {
    if(!this.props.location.pathname.endsWith("users")){
      this.props.history.push("/users");
    } else {
      this.setState({ input: "" });
    }
  };
  disabled = (button: string): boolean => {
    return button === "submit"
      ? !this.state.input.length
      : !this.props.location.pathname.includes("search") &&
          !this.state.input.length;
  };
  loadInput = () => {
    if(this.props.match.params.srchVal)
      this.setState({ input: this.props.match.params.srchVal })
    else this.setState({ input: "" });
  };
  componentDidMount(){
    this.loadInput();
  }
  componentDidUpdate(prevProps: SearchProps){
    if(prevProps.match.params.srchVal !== this.props.match.params.srchVal)
      this.loadInput();
  }
  render() {
    return (
      <form className="m-2" onSubmit={this.handleSubmit}>
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
              type="submit"
              className="btn btn-primary"
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
      </form>
    );
  }
}

export default Search;
