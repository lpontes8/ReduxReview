import './App.css';
import { petIncrement, petDecrement } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const petCounter = useSelector((state) => (state.petCounter));

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux Exercise</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove Pet</button>
      <h2>Pets : {petCounter}</h2>
    </div>
  );
}

export default App;