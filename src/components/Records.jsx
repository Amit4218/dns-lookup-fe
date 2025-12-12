import React from "react";

function Records({ data }) {
  if (data.record == "MX") {
    return (
      <>
        {data.result.map((value, idx) => {
          return (
            <div className="col-span-1 text-[#D0CDD7]" key={idx}>
              <div className="grid grid-cols-3">
                <div className="col-span-3 text-center text-md my-1 text-sm md:text-xl">
                  <label className="p-4">{value.exchange}</label>
                  <label className="p-4">{value.priority}</label>
                  <label className="p-4">{value.type}</label>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  if (data.record == "TXT") {
    return (
      <>
        <div className="text-center grid grid-cols-1">
          {data.result.map((value, idx) => {
            return (
              <div
                className="col-span-1 text-[#D0CDD7] text-sm md:text-xl "
                key={idx}
              >
                <div className="grid grid-cols-1">
                  <div className="flex-1 truncate text-md my-1 ">{value} </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  if (data.record == "SOA") {
    return (
      <>
        <div className="col-span-1 text-[#D0CDD7]">
          <div className="grid grid-cols-1 text-sm md:text-xl">
            <label className="p-4 text-center">
              Hostmaster {":"} {data.result.hostmaster}
            </label>
            <label className="p-4 text-center   ">
              NS name {":"} {data.result.nsname}
            </label>
            <label className="p-4 text-center   ">
              Serial {":"} {data.result.serial}
            </label>
            <label className="p-4 text-center   ">
              Refresh {":"} {data.result.refresh}
            </label>
            <label className="p-4 text-center   ">
              Retry {":"} {data.result.retry}
            </label>
            <label className="p-4 text-center   ">
              Expire {":"} {data.result.expire}
            </label>
            <label className="p-4 text-center   ">
              Minttl {":"} {data.result.minttl}
            </label>
          </div>
        </div>
      </>
    );
  }

  if (data.record == "CAA") {
    return (
      <>
        {data.result.map((value, idx) => {
          return (
            <div
              className="col-span-1 text-[#D0CDD7] text-xs md:text-xl"
              key={idx}
            >
              <div className="grid grid-cols-3 ">
                <div className="col-span-3 text-center flex justify-center  items-center ">
                  <div className="justify-center items-center">
                    <label className="p-4">
                      Critical {"=>"} {value.critical}
                    </label>
                    <label className="p-4">
                      Type {"=>"} {value.type}
                    </label>
                    <label className="p-4">
                      Issue {"=>"} {value.issue || value.issuewild}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="text-center grid grid-cols-1">
      {data.result.map((value, idx) => {
        return (
          <div className="text-center">
            <div
              className="col-span-1 text-[#D0CDD7] text-sm md:text-xl"
              key={idx}
            >
              {value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Records;
