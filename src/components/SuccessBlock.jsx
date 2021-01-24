import useJsonFetch from '../hooks/useJsonFetch';

const SuccessBlock = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data')

  return (
    <div>
      <h2>SUCCESS</h2>
      <div>Data: {data}</div>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
    </div>
  )
}

export default SuccessBlock;