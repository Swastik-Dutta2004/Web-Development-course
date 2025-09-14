import React, { useState, useEffect, } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData( )

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Swastik-Dutta2004")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading GitHub profile...
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80 border border-gray-200">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md border-2 border-orange-400"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {data.name || "Unknown User"}
        </h1>
        <p className="text-gray-600 mb-4">@{data.login}</p>

        <div className="flex justify-around text-gray-700 text-sm font-medium">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{data.followers}</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{data.following}</span>
            <span>Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold">{data.public_repos}</span>
            <span>Repos</span>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-2 bg-orange-600 text-white font-medium rounded-xl shadow hover:bg-orange-700 transition"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoloader = async () => {
  const response = await fetch("https://api.github.com/users/Swastik-Dutta2004")
  return(response.json())
}