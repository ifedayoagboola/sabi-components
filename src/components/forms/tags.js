import React, { useState } from "react";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";

const Tag = ({ text, closable, color, prefixIcon }) => {
  const [close, setClose] = useState(true);
  return close ? (
    <div
      className={`flex justify-center items-center py-1 px-2 w-36 rounded-full ${color}`}
    >
      {prefixIcon && <span className="mr-1">{prefixIcon}</span>}
      <span className="text-white text-sm">{text}</span>
      {closable && (
        <span className="ml-2 cursor-pointer">
          <Close onClick={() => setClose(false)} />
        </span>
      )}
    </div>
  ) : (
    <span />
  );
};

export default Tag;
