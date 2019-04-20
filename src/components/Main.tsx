import * as React from "react";
import axios from "axios";
import { number } from "prop-types";
import Users from "./Users";

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
    constructor(props: object){
        super(props);
        this.state = {
            users: [],
            count: null,
            errors: []
        }
    }
    componentDidMount(){
        axios.get("https://acme-users-api.herokuapp.com/api/users/")
            .then(response => response.data)
            .then(data => this.setState({ users: data.users, count: data.count }))
            .catch(e => this.setState({ errors: e.response.data.errors }));
    }
    render(){
        const { users } = this.state
        return(
            <div className="container">
                <h1>Acme Users</h1>
                <Users users={users} />
            </div>
        );
    }
}

export default Main;
