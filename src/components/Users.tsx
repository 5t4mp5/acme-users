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

const highlight = (input: string, srchVal: string) => {
  const srchLen: number = srchVal.length;
  let inner = [];
  let current: number = 0;
  while (current < input.length) {
    const thisSlice = input.slice(current, current + srchLen);
    if (thisSlice.toLowerCase() === srchVal.toLowerCase()) {
      inner.push(
        <span
          className="hilite"
          style={{ backgroundColor: "yellow" }}
          key={`${thisSlice}${current}`}
        >
          {thisSlice}
        </span>
      );
      current += srchLen;
    } else {
      inner.push(input[current]);
      current++;
    }
  }
  console.log(inner);
  return <div>{inner}</div>;
};

const Users = (props: UsersProps) => {
  const { match, history, location, count, users } = props;
  return (
    <div>
      <Pager
        match={match}
        history={history}
        count={count}
        location={location}
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
                    ? highlight(user.firstName, match.params.srchVal)
                    : user.firstName}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? highlight(user.lastName, match.params.srchVal)
                    : user.lastName}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? highlight(user.middleName, match.params.srchVal)
                    : user.middleName}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? highlight(user.email, match.params.srchVal)
                    : user.email}
                </div>
              </td>
              <td>
                <div>
                  {match.params.srchVal
                    ? highlight(user.title, match.params.srchVal)
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
