import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "../components/Result";
import Toast from "../components/Toast";

const RECORD_TYPES = [
  "A",
  "AAAA",
  "CNAME",
  "MX",
  "NS",
  "TXT",
  "SRV",
  "PTR",
  "SOA",
  "CAA",
];

const RECORD_DESCRIPTION = [
  "IPv4 Address",
  "IPv6 Address",
  "Canonical Name",
  "Mail Exchange",
  "Name Server",
  "Text records",
  "Service locator",
  "Pointer",
  "Start of Authority",
  "Certificate Authority Authorization",
];

const BASE_URL = import.meta.env.VITE_API_URL;

function Home() {
  const [domain, setDomain] = useState("");
  const [recordType, setRecordType] = useState(RECORD_TYPES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRecordData = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}/api/${recordType}/?domain=${domain.trim()}`
      );
      setData(res.data);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.error);
      console.error("Error fetching DNS Record Data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      setInterval(() => {
        setError(null);
      }, 2000);
    }
  }, [error]);

  return (
    <>
      {error && (
        <div className="flex justify-end pr-10">
          <div className="absolute  pt-10 z-10 w-1/6">
            <Toast error={error} />
          </div>
        </div>
      )}

      <div className="h-[88.7vh] bg-gray-900 px-6 lg:px-8 rounded overflow-y-auto pb-10">
        <div className="mb-5">
          <h1 className="text-center pt-10 text-3xl sm:text-5xl text-[#D9DBF1]">
            DNS Lookup Tool
            <p className="text-sm text-zinc-600 leading-0 pt-5">
              Search Up Different Dns Data Records
            </p>
          </h1>
        </div>

        <div className="flex justify-center items-center pl-10 py-4">
          <form
            onSubmit={fetchRecordData}
            className="grid grid-cols-2 space-x-6 "
          >
            <label htmlFor="domain" className="text-[#D9DBF1] pb-2 ">
              Domain Name
            </label>
            <label htmlFor="record" className="text-[#D9DBF1] pb-2 ">
              Record Type
            </label>
            <input
              type="text"
              name="domain"
              className="bg-[#416165] h-8 rounded px-2 outline-none text-[#D0CDD7] "
              placeholder="Enter domain"
              value={domain}
              onChange={(e) => {
                setDomain(e.target.value);
              }}
              required
            />
            <select
              type="text"
              name="record"
              className="bg-[#416165] rounded px-2 outline-none text-[#D0CDD7] "
              onChange={(e) => {
                setRecordType(e.target.value);
              }}
              value={recordType}
              required
            >
              {RECORD_TYPES.map((r, i) => (
                <option
                  key={r}
                  value={r}
                  className="bg-[#416165] rounded px-2 outline-none text-[#D0CDD7]"
                >
                  {r} - {RECORD_DESCRIPTION[i]}
                </option>
              ))}
            </select>
            <div className="col-span-2 flex justify-center mt-7 -ml-6">
              <button
                disabled={isLoading}
                type="submit"
                className="text-center px-9 py-2 bg-[#0B3948] text-[#D0CDD7] rounded font-bold hover:bg-[#416165] cursor-pointer"
              >
                {isLoading ? "Fetching" : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-3">{data && <Result data={data} />}</div>
      </div>
    </>
  );
}

export default Home;
