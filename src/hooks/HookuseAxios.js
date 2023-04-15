import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    });

    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                setState({
                ...state,
                loading: false,
                data
            });
        })
        .catch((error) => {
            setState({ ...state, loading: false, error });
        });
    }, [trigger]);

    if (!opts.url) {
      return;
    }

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };

    return { ...state, refetch };
};

function HookuseAxios() {

    const {loading, data, error, refetch} = useAxios({url:"https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"});

    console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);

    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default HookuseAxios;