import * as React from "react";

interface HiliteProps {
    value: string;
}

const Hilite = ({ value }: HiliteProps) => {
    return (
        <span className="hilite">{value}</span>
    );
};

export default Hilite;
