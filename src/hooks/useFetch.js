import { useState, useEffect } from "react";
// import axios from "axios";

const useFetch = (samplePosts) => {
   
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        // const abortController = new AbortController()

        // axios.get(URL)
        //     .then(function (response) { 
        //     console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .then(function () {   // always executed
        //         setIsLoading(false)
        //     });

        setTimeout(
            () => (
                // eslint-disable-next-line no-sequences
                setData(samplePosts),
                setIsLoading(false),
                setError(null)
            ), 2000)

        //useEffect cleanup
        return () => {
            console.log("Clean up")
        }
    }, [samplePosts])

    return { data, isLoading, error }
}

export default useFetch;
