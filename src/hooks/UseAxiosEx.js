import React from "react";
import useAxios from "./useAxios";

const UseAxiosEx = () => {
	const { loading, data, error, refetch } = useAxios({
		url: "https://yts.mx/api/v2/list_movies.json",
	});
	//console.log(`Loading: ${loading}\nData: ${JSON.stringify(data)}\nError: ${error}`);
	return (
		<div>
			<h2>axios status : {data && data.status}</h2>
			<h3>{loading && "Loading"}</h3>
			<button onClick={refetch}>Refetch</button>
		</div>
	);
};

export default UseAxiosEx;
