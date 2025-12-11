import React from "react";

function Records({ data }) {
  if (data.record == "MX") {
    return (
      <>
        {data.result.map((value, idx) => {
          return (
            <div className="col-span-1 text-[#D0CDD7]" key={idx}>
              <div className="grid grid-cols-3">
                <div className="col-span-3 text-center  py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
                  <label className="p-4">
                    Exchange {"=>"} {value.exchange}
                  </label>
                  <label className="p-4">
                    Priority {"=>"} {value.priority}
                  </label>
                  <label className="p-4">
                    Type {"=>"} {value.type}
                  </label>
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
              <div className="col-span-1 text-[#D0CDD7] text-md " key={idx}>
                <div className="grid grid-cols-1">
                  <div className="flex py-2 border px-2  truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
                    Record {(idx += 1)} {"=>"} {value}{" "}
                  </div>
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
          <div className="grid grid-cols-1">
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              Hostmaster {"=>"} {data.result.hostmaster}
            </label>
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              NS name {"=>"} {data.result.nsname}
            </label>
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              Serial {"=>"} {data.result.serial}
            </label>
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              Refresh {"=>"} {data.result.refresh}
            </label>
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              Retry {"=>"} {data.result.retry}
            </label>
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              Expire {"=>"} {data.result.expire}
            </label>
            <label className="p-4 text-center   py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
              Minttl {"=>"} {data.result.minttl}
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
            <div className="col-span-1 text-[#D0CDD7]" key={idx}>
              <div className="grid grid-cols-3">
                <div className="col-span-3 text-center flex  py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]">
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
              className="col-span-1 text-[#D0CDD7]  py-2 border px-2 truncate text-md my-1 rounded bg-[#0B3948] hover:bg-[#416165] hover:border-[#0B3948]"
              key={idx}
            >
              Record {(idx += 1)} {"=>"} {value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Records;
