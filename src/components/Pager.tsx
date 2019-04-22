import * as React from "react";

interface PagerProps {
    history: { push: Function };
    match: { params: { pageId: string } };
    count: number;
    page: number; 
}

const Pager = (props: PagerProps) => {
    const { count, match, history, page } = props;
    return (
        <div>
            {count} Results. Page {+match.params.pageId + 1 || 1} out of {Math.ceil(count/50)}
            <br />
            <div className="btn-group" style={{ marginTop: "10px", marginBottom: "5px" }}>
            <button type="button" className="btn btn-info" onClick={() => history.push(`/users`)} >First</button>
            <button type="button" className="btn btn-info" onClick={() => history.push(`/users/${+match.params.pageId - 1}`)} >Prev</button>
            <button type="button" className="btn btn-primary" onClick={() => history.push(`/users/${+match.params.pageId || 1}`)} >{+match.params.pageId + 1 || 1}</button>
            <button type="button" className="btn btn-info" onClick={() => history.push(`/users/${+match.params.pageId + 1 || 1}`)} >Next</button>
            <button type="button" className="btn btn-info" onClick={() => history.push(`/users/${Math.ceil(count/50) - 1}`)} >Last</button>
            </div>
        </div>
    );
};
export default Pager;
