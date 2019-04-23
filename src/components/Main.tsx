import * as React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import Nav from "./Nav";
import { string } from "prop-types";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  title: string;
}

interface MainProps {
  location: { pathname: string };
  match: { params: { pageId: string } };
  history: { push: Function };
}

interface MainState {
  users: User[];
  count: number;
  error: string;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      users: [],
      count: null,
      error: ""
    };
  }
  load = (): void => {
    const { location } = this.props;

    if (location.pathname.includes("users")) {
      axios
        .get(`https://acme-users-api.herokuapp.com/api${location.pathname}`)
        .then(response => response.data)
        .then(data => this.setState({ users: data.users, count: data.count }))
        .catch(e => this.setState({ error: e.response.statusText }));
    }
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps: MainProps) {
    if (prevProps.location.pathname !== this.props.location.pathname)
      this.load();
  }
  render() {
    const { users, count } = this.state;
    return (
      <div className="container">
        <h1>Acme Users</h1>
        <Route component={Nav} />
        <Switch>
          <Route
            path={"/users/search/:srchVal/:pageId?"}
            render={props => (
              <Users
                users={users}
                match={props.match}
                history={props.history}
                count={count}
                location={props.location}
              />
            )}
          />
          <Route
            path={"/users/:pageId?"}
            render={props => (
              <Users
                users={users}
                match={props.match}
                history={props.history}
                count={count}
                location={props.location}
              />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
        {this.state.error ? (
          <div className="alert alert-danger">{this.state.error}</div>
        ) : null}
      </div>
    );
  }
}

export default Main;
