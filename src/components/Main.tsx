import * as React from "react";
import axios from "axios";
import { number } from "prop-types";

interface User {
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
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Middle Name</th>
                        <th>Email</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.middleName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* <ul className="list-group">
                    {
                        this.state.users.map(user => (
                            <li key={user.id} className="list-group-item">{user.firstName} {user.lastName}</li>
                        ))
                    }
                </ul> */}
            </div>
        );
    }
}

export default Main;
