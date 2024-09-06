import { useEffect, useState } from "react";
import { userStore } from "../stores/userStore";

export const useFetchHook = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const tk = userStore(state => state.usuario?.token)
        myHeaders.append("Authorization", "Bearer " + tk);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
        };

        const response = await fetch(url, requestOptions);
        const json = await response.text();
        setData(JSON.parse(json));
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData()

  }, [url]);

  return { data, loading, error}
};
export default useFetchHook;