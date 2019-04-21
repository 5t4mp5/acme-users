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

interface State {
  users: User[];
  count: number;
  errors: object[];
}

class Main extends React.Component<{}, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [],
      count: null,
      errors: []
    };
  }
  componentDidMount() {
    axios
      .get("https://acme-users-api.herokuapp.com/api/users/")
      .then(response => response.data)
      .then(data => this.setState({ users: data.users, count: data.count }))
      .catch(e => this.setState({ errors: e.response.data.errors }));
  }
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h1>Acme Users</h1>
        <Route component={Nav} />
        <Switch>
          <Route
            path="/users"
            render={({ location, match }) => (
              <Users users={users} match={match} location={location} />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
