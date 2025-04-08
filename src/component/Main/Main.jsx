import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Main = () => {
  const { register, handleSubmit } = useForm(); 
  const [returnedData, setReturnedData] = useState(""); 

  const returned = "SHORTEN LINK" 

  const onSubmit = (data) => {
    setReturnedData(data.inputField)
    console.log(data); 
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(returnedData); 
  };

  return (
    <div className="p-8 font-sans w-screen h-screen  flex flex-col justify-center items-center ">
      <div className="flex flex-col border-2 justify-center items-center w-[35rem] h-auto py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-[90%] p-4 border border-gray-300 rounded bg-gray-100 flex items-center ">
              <div className="w-[90%]" >
                <label htmlFor="inputField" className="block text-gray-700 font-medium mb-2">
                  Enter URL:
                </label>
                <input id="inputField" name="inputField"  type="text"
                  {...register("inputField", { required: true })}
                    className="w-[90%] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className=" text-white w-[20%] h-[95%] font-bold text-3xl py-2 px-4 rounded bg-orange-700 hover:bg-orange-500"
              >
                GO
              </button>
      </form>
      
      
      <div className="mt-6 w-[90%] p-4 border border-gray-300 rounded bg-gray-100 flex items-center">
          <input id="returnedData" type="text" value={returnedData || returned} readOnly
            className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={copyToClipboard} className="ml-4 bg-orange-700 over:bg-orange-500 text-white py-2 px-4 rounded " >
            Copy
      </button>

      </div>
      </div>

    </div>
  );
};

export default Main;