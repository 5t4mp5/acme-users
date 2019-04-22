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
            <div className="btn-group">
            <button type="button" className="btn btn-info" onClick={() => history.push(`/users`)} >First</button>
            <button type="button" className="btn btn-info" onClick={() => history.push(`/users/${Math.ceil(count/50) - 1}`)} >Last</button>
            </div>
        </div>
    );
};
export default Pager;
