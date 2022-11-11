import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [Search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:1337", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Search,
      }),
    });

    const dataFetched = await response.json();
     setData(dataFetched);
    };

  return (
    <div className=" ">
      <h1 className=" text-center py-2 text-3xl font-bold font-sans text-red-300 bg-sky-200">
        Search
      </h1>
      <form onSubmit={handleSubmit} className="flex justify-center mx-auto my-2 py-2 ">
        <input
          type="text"
          name="username"
          placeholder="Search "
          className="border-b-4 inline-flex py-2 border-b-blue-300 outline-none p-2 "
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" className="bg-blue-500 font-bold px-5 py-2 border-b-[5px] border-b-blue-700 focus:border-b-2 focus:text-gray-50 " />
      </form>
     
      <div className="grid grid-cols-2 md:grid-cols-3  my-2 gap-5 mx-20">
        {data.map((e)=><img key={e._id} src={`https://drive.google.com/uc?export=view&id=${e.imageUrl.split('/')[5]}`} alt="Ads" className=" w-64 h-72"/>)}
      </div>
    </div>
  );
}

export default App;
