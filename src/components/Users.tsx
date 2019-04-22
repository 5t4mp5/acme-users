import * as React from "react";
import { User as UserInterface } from "./Main";
import Pager from "./Pager";
import Search from "./Search";

interface UsersProps {
  users: UserInterface[];
  match: { params: { pageId: string, srchVal: string } };
  history: { push: Function };
  location: { pathname: string };
  count: number;
}

const Users = (props: UsersProps) => {
  const { match, history, location, count, users } = props;
  return (
    <div>
      <Pager match={match} history={history} count={count} location={location} />
      <Search history={history} />
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
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.middleName}</td>
              <td>{user.email}</td>
              <td>{user.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
