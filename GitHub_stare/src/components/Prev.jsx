import React from "react";

const Prev = ({
  name,
  imgUrl,
  loginId,
  loginUrl,
  repoCount,
  gitsCount,
  following,
  follower,
}) => {
  return (
    <div className="mb-4 flex flex-col items-center gap-5">
      <img className="rounded-full size-14" src={imgUrl} alt="profile" />
      <h1>Hello {name}</h1>
      <h1 className="text-xl underline">
        Most recent Activity of - <a href={loginUrl}>{loginId}</a>
      </h1>

      <div className="flex flex-row justify-center space-x-4">
        <h3 className="border border-gray-500 px-4 py-2 rounded-md text-center shadow-lg">
          Repos: {repoCount}
        </h3>
        <h3 className="border border-gray-500 px-4 py-2 rounded-md text-center shadow-lg">
          Gists: {gitsCount}
        </h3>
        <h3 className="border border-gray-500 px-4 py-2 rounded-md text-center shadow-lg">
          Following: {following}
        </h3>
        <h3 className="border border-gray-500 px-4 py-2 rounded-md text-center shadow-lg">
          Followers: {follower}
        </h3>
      </div>
    </div>
  );
};

export default Prev;
