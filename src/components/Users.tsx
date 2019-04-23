import * as React from "react";
import { User as UserInterface } from "./Main";
import Pager from "./Pager";
import Search from "./Search";
import Hilite from "./Hilite";

interface UsersProps {
  users: UserInterface[];
  match: { params: { pageId: string; srchVal: string } };
  history: { push: Function };
  location: { pathname: string };
  count: number;
}

const Users = ({ match, history, location, count, users }: UsersProps) => {
  return (
    <div>
      <Pager
        match={match}
        history={history}
        count={count}
      />
      <Search history={history} location={location} match={match} />
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
              <td>
                <div>
                  {match.params.srchVal
                    ? <Hilite input={user.firstName} srchVal={match.params.srchVal} />
                    : user.firstName}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? <Hilite input={user.lastName} srchVal={match.params.srchVal} />
                    : user.lastName}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? <Hilite input={user.middleName} srchVal={match.params.srchVal} />
                    : user.middleName}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? <Hilite input={user.email} srchVal={match.params.srchVal} />
                    : user.email}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? <Hilite input={user.title} srchVal={match.params.srchVal} />
                    : user.title}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
