import * as React from "react";

interface HiliteProps {
    input: string;
    srchVal: string;
}

const Hilite = ({ input, srchVal }: HiliteProps) => {
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
  return <div>{inner}</div>;
};

export default Hilite;
