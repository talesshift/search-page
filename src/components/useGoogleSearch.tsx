import { useEffect, useState } from "react"
import { CUSTOM_SEARCH_API_KEY } from "./keys"

const GOOGLE_CONTEXT_KEY = "a0d1d7ad50cc04e1e"

const useGoogleSearch = (term: string) => {
    
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${CUSTOM_SEARCH_API_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${term}`
            )
            .then((response) => response.json())
            .then(result => {
                console.log(result)
                setData(result)
            })
        }
        fetchData()
        //console.log(data)
    }, [term])
    
    return (data)
}
export default useGoogleSearch