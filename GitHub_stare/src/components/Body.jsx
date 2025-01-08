import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import Prev from "./Prev";

const Body = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState([]);
  const [userAboutData, setUserAboutData] = useState(null);

  const fetchApiData = async (userName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}/events`
      );
      const responseAboutUser = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      setUserAboutData(responseAboutUser.data);
      setUserData(response.data);
      console.log(userData);
    } catch (error) {
      console.error("Error fetching in data:", error);
    }
  };
  console.log("this is user about data", userAboutData);
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName) {
      fetchApiData(userName);
      //console.log(userName);
    }
    setUserName("");
  };

  return (
    <div className="bg-slate-300 flex flex-col justify-center ">
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

      {userAboutData && (
        <Prev
          name={userAboutData.name}
          imgUrl={userAboutData.avatar_url}
          loginId={userAboutData.login}
          loginUrl={userAboutData.url}
          repoCount={userAboutData.public_repos}
          gitsCount={userAboutData.public_gists}
          following={userAboutData.following}
          follower={userAboutData.followers}
        />
      )}

      <div className="flex flex-col">
        {userData?.map((instance) => (
          <Card
            type={instance.type}
            created={instance.created_at}
            repoName={instance.repo.name}
            commitName={instance?.payload?.commits?.[0]?.message} //in my payload if don't have commit so i do it.
            commitUrl={instance?.payload?.head}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
