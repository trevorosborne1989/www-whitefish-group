import {useState, useEffect} from 'react'


function useCustomFetch(url){ //Use githubs api call url: https://api.github.com/repos/hadley/dplyr/issues 
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function custFetch() {
        try{
            let response = await fetch(url); // await = retrieve this before executing next line of code.
            let rData = await response.json(); // You always use both these lines in a fetch.
            setData(rData);
            setLoading(false);
        } catch (e){
            setError(e);
            setLoading(false);
        }
    }
    useEffect(()=> {
        setLoading(true);
        custFetch(); 
    }, [url]); // If you pass an empty array, the hook only happens when component mounts instead of every time component update. So only one fetch. If the hook is watching a variable(s) like url, any change to that variable and the hook runs again updating the component.

    return [data, loading, error];
}

export default useCustomFetch;
