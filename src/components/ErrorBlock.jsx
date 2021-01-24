import useJsonFetch from '../hooks/useJsonFetch';

const ErrorBlock = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error')
  console.log(error);
  return (
    <div>
      <h2>ERROR</h2>
      <div>Data: {data}</div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
    </div>
  )
}

export default ErrorBlock;