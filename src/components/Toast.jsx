import React from "react";

function Toast({ error }) {
  return (
    <>
      <div className="bg-[#0B3948] text-center text-xs md:text-[1em] p-3 py-2  text-[#D9DBF1] md:h-10 h-20 rounded">
        <h4>{error || "Something went Wrong !"}</h4>
      </div>
    </>
  );
}

export default Toast;
