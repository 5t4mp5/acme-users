import * as React from "react";
import { User as UserInterface } from "./Main";

interface UsersProps {
    users: UserInterface[];
}

const Users = (props: UsersProps) => {
    const { users } = props;
    return (
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
    );
}

export default Users;
