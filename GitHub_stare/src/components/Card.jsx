import React from "react";

const card = ({ type, created, repoName, commitName, commitUrl }) => {
  return (
    <div className="flex items-center flex-col bg-slate-400 m-5 p-3 gap-2 rounded-md ">
      <h1>{type}</h1>
      <h3>{created}</h3>
      <a href={"https://github.com/" + repoName}>{repoName}</a>
      <a href={"https://github.com/" + repoName + "commit" + commitUrl}>
        {commitName}
      </a>
    </div>
  );
};

export default card;
