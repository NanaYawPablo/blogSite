import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    // const useFetch = (samplePosts) => {  
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

const clearObjects =()=>{
    setError(null)
    setData(null)
}

    useEffect(() => {

        clearObjects()
        const source = axios.CancelToken.source();
        
        setTimeout(
            () => (
        axios.get(url,{ 
            cancelToken: source.token 
        })
            .then(function (response) { 
                setData(response.data)
                setIsLoading(false)
            })
            .catch(function (error) {
                    if (axios.isCancel(error)){
                        console.log("Fetch aborted!");  
                    }
                    else{
                    console.log(error.response);
                    // setError("Oops! An error occurred.")
                    setError(error.message)
                    setIsLoading(false)
                }
            })
            ), 2000)

        // setTimeout(() => (
        //         setData(samplePosts),
        //         setIsLoading(false),
        //         setError(null)
        //     ), 2000)

        //useEffect cleanup
        return () => {
            source.cancel();
        }
    }, [url])

    return { data, isLoading, error }
}

export default useFetch;
