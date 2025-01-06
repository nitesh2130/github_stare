import React, { useState } from "react";
import axios from "axios";

const Body = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");

  const fetchApiData = async (userName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}/events`
      );

      setUserData(response.data);
      console.log(userData);
    } catch (error) {
      console.error("Error fetching in data:", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName) {
      fetchApiData(userName);
      //console.log(userName);
    }
    setUserName("");
  };

  return (
    <div className="bg-slate-300 flex justify-center ">
      <form
        onSubmit={submitHandler}
        className="flex justify-center text-2xl my-11 py-4 gap-5"
        action=""
      >
        <input
          className="rounded-full"
          placeholder=" Enter Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)} // Update userName state
          type="text"
        />
        <button
          type="submit"
          className="rounded-full text-white bg-orange-400 m-2 px-3 py-1 hover:bg-orange-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Body;
