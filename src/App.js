import SuccessBlock from './components/SuccessBlock';
import LoadingBlock from './components/LoadingBlock';
import ErrorBlock from './components/ErrorBlock';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>TEST HOOKS</h1>
    <SuccessBlock />
    <LoadingBlock />
    <ErrorBlock />
    </div>
  );
}

export default App;
