import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-7 text-3xl">
      {data.bio}
      <h2 className="p-8 text-5xl"> Repos : {data.public_repos}</h2>

      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Yadubir");
  return res.json();
};
