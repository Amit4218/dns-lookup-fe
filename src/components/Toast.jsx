import React from "react";

function Toast({ error }) {
  return (
    <>
      <div className="bg-[#0B3948] text-center  sm:text-md py-2 px-3 text-[#D9DBF1] h-10 rounded">
        <h4>{error || "Something went Wrong !"}</h4>
      </div>
    </>
  );
}

export default Toast;
