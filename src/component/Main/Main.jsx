import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Main = () => {
  const { register, handleSubmit } = useForm();
  const [returnedData, setReturnedData] = useState("");
  const [prevData, setPrevData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const returned = "";

  const onSubmit = async (data) => {
    const url = "http://localhost:8001/api/url";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url: data.url }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setReturnedData(
        "http://localhost:8001/" + json.id || "Failed to generate link"
      );
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteREq = async (d) => {
    fetch(`http://localhost:8001/api/url/${d}`, { method: "DELETE" }).then(() =>
      this.setState({ status: "Delete successful" })
    );
  };

  useEffect(() => {
    fetch(`http://localhost:8001/api/url/data`)
      .then((res) => res.json())
      .then((data) => setPrevData(data));
  }, [onSubmit]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(returnedData);
  };

  const safePrevData = Array.isArray(prevData) ? prevData : [];

  return (
    <div className="p-8 font-sans w-full h-screen bg-gray-50 flex flex-wrap  flex-row gap-8 justify-center items-center md:items-start">
      
      {/* First Div */}
      <div className="flex flex-col border-2 border-gray-300 rounded-lg shadow-md bg-white justify-center items-center  w-full max-w-[30rem] h-auto p-8 flex-shrink-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-full p-6 border border-gray-200 rounded bg-gray-100 flex flex-col items-start gap-4"
        >
          <div className="w-full">
            <label
              htmlFor="inputField"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter URL:
            </label>
            <input
              id="inputField"
              name="inputField"
              type="text"
              {...register("url", { required: true })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 text-white text-lg font-bold rounded bg-orange-700 hover:bg-orange-500"
          >
            GO
          </button>
        </form>
  
        <div className="mt-6 w-full p-4 border border-gray-200 rounded bg-gray-100 flex flex-wrap gap-1 items-center">
          <input
            id="returnedData"
            type="text"
            value={returnedData || returned}
            placeholder="Short link appears here..."
            readOnly
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={copyToClipboard}
            className="w-full py-3 mt-2 text-white text-lg font-bold rounded bg-orange-700 hover:bg-orange-500"
          >
            Copy
          </button>
        </div>
      </div>
  
      {/* Second Div */}
      <div className="flex flex-col border-2 border-gray-300 rounded-lg shadow-md bg-white justify-center items-center w-full max-w-[30rem] h-auto p-8 overflow-y-auto flex-shrink-0">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          placeholder="Search URL..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        <div className="text-lg font-semibold text-gray-700 mb-2">
          Generated URLs
        </div>
  
        {safePrevData
          .filter((item) =>
            item.redirectURL.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <div className="flex flex-col border border-gray-300 rounded-lg p-6 w-full bg-gray-100 gap-4">
              {/* Original URL */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Original URL:</span>
                <span className="text-gray-600">{item.redirectURL}</span>
              </div>
  
              {/* Total Clicks */}
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Total Clicks:</span>
                <span className="text-gray-600">{item.visitHistory.length}</span>
              </div>
  
              {/* Input Box and Buttons */}
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  className="flex-grow border rounded-lg p-2 text-gray-700"
                  value={`http://localhost:8001/${item.shortId}`}
                  readOnly
                />
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `http://localhost:8001/${item.shortId}`
                    )
                  }
                  className="bg-orange-700 hover:bg-orange-500 text-white px-4 py-2 rounded-lg"
                >
                  Copy
                </button>
                <button
                  onClick={() => deleteREq(item.shortId)}
                  className="bg-orange-700 hover:bg-orange-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

};

export default Main;
