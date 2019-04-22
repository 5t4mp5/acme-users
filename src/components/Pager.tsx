import * as React from "react";
import { Link } from "react-router-dom";

interface PagerProps {
  history: { push: Function };
  match: { params: { pageId: string; srchVal: string } };
  location: { pathname: string };
  count: number;
}

const Pager = (props: PagerProps) => {
  const { count, match, history, location }: PagerProps = props;
  const page: number = +match.params.pageId;
  const pageCount: number = Math.ceil(count / 50);
  const first: boolean = !page;
  const last: boolean = page === pageCount - 1;
  const basePath: string = location.pathname.includes("search")
    ? `/users/search/${match.params.srchVal}`
    : "/users";
  return (
    <div>
      {count} Results. Page {page + 1 || 1} out of {pageCount}
      <br />
      <div
        className="btn-group"
        style={{ marginTop: "10px", marginBottom: "5px" }}
      >
        <button
          type="button"
          className="btn btn-info"
          onClick={() => history.push(`${basePath}`)}
          disabled={first}
        >
          First
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => history.push(`${basePath}/${page - 1}`)}
          disabled={first}
        >
          Prev
        </button>
        <Link className="btn btn-primary" to={`/users/${page || ""}`}>
          {page + 1 || 1}
        </Link>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => history.push(`${basePath}/${page + 1 || 1}`)}
          disabled={last}
        >
          Next
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => history.push(`${basePath}/${pageCount - 1}`)}
          disabled={last}
        >
          Last
        </button>
      </div>
    </div>
  );
};
export default Pager;
