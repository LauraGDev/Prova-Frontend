import { useEffect, useState } from "react";
import { CORS_ANYWHERE } from "../config/urls"

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if(url != null) {
            setLoading(true);
            fetch(`${CORS_ANYWHERE}${url}`)
                .then((response) => response.json())
                .then((response) => setData(response))
                .catch((err) => setError(err))
                .finally(() => setLoading(false));
        }
    }, [url]);
    return { data, loading, error };
}

export default useApi
