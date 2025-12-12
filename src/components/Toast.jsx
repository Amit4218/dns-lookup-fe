import React from "react";

function Toast({ error }) {
  return (
    <>
      <div className="bg-[#0B3948] text-center text-xs md:text-xl p-3   text-[#D9DBF1] md:h-15 h-20 rounded">
        <h4>{error || "Something went Wrong !"}</h4>
      </div>
    </>
  );
}

export default Toast;
