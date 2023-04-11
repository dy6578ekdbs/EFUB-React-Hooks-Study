import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = ( opts, axiosInstance = defaultAxios ) => {
  const [state,setState] = useState({
    loading:true,
    error:null,
    data:null,
  });
  const [trigger, setTrigger] = useState(0); 
  useEffect(() => {
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      });
    }).catch(error => {
      setState({...state, loading:false, error})
    })
  }, [trigger]);
  if(!URL.opts){
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  }
  
  return {...state, refetch};
}
export default useAxios;