import * as React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import Nav from "./Nav";

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
  history: { push: Function }
}

interface State {
  users: User[];
  count: number;
  page: number;
  errors: object[];
}

class Main extends React.Component<MainProps, State> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      users: [],
      count: null,
      page: null,
      errors: []
    };
  }
  load = () => {
    const { location, match } = this.props;

    if (location.pathname.includes("users")) {
      axios
        .get(`https://acme-users-api.herokuapp.com/api${location.pathname}`)
        .then(response => response.data)
        .then(data => this.setState({ users: data.users, count: data.count }))
        .catch(e => this.setState({ errors: e.response.data.errors }));
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
    const { users } = this.state;
    return (
      <div className="container">
        <h1>Acme Users</h1>
        <Route component={Nav} />
        <Switch>
          <Route
            path={"/users/:pageId?" || "/users/search/:srchVal"}
            render={(props) => (
              <Users users={users} match={props.match} history={props.history} count={this.state.count} page={this.state.page} />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
