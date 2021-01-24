import useJsonFetch from '../hooks/useJsonFetch';

const LoadingBlock = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading')


  return (
    <div>
      <h2>LOADING</h2>
      <div>Data: {data}</div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
    </div>
  )
}

export default LoadingBlock;