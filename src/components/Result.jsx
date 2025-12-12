import React from "react";
import Records from "./Records";

function Result({ data }) {
  return (
    <>
      <div className="text-center mb-2">
        <h2 className="text-[#D0CDD7] text-3xl">Record Results</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-center py-2 w-3/5 rounded p-6 pb-10 bg-[#416165] overflow-scroll">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-sm sm:text-xl mb-2 text-center mt-4 col-span-2 text-[#D0CDD7]">
              Results
            </div>
          </div>

          {data.result.length === 0 && (
            <div className="col-span-1 text-[#D0CDD7] p-4 text-center ">
              {"No Result Found"}
            </div>
          )}

          <Records data={data} />
        </div>
      </div>
    </>
  );
}

export default Result;
