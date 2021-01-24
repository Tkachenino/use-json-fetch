import {useState, useEffect} from 'react';

const useJsonFetch = (url, opts) => {
  const [error, setError] = useState('errors is not found');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(()=> {
    let canceled = false;

    const getFetch = async() => {
      setLoading(true);
      try {
        const response = await fetch(url, {...opts});
  
        if (!response.ok) {
          setError(`${response.status}: ${response.statusText}`)
        } else {
          const result = await response.json();

          if (!canceled) {
            setData(result.status);
          }
        }
    
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    }

    getFetch();
    return () => {canceled = true}
  },[url, opts])



  return [data, loading, error];
}

export default useJsonFetch;