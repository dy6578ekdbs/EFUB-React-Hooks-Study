import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import useAxios from "./useAxios";

const HookuseAxios = () => {
  const {loading, data, error, refetch} = useAxios({url:"https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"})
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default HookuseAxios;
