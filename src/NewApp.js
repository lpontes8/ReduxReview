import './App.css';
import { petFavoriteIncrement, petFavoriteDecrement} from './actions';
import { useSelector, useDispatch } from 'react-redux';

function NewApp() {
    const petCounter = useSelector((state) => state.petCounter);
    const petFavorite = useSelector((state) => state.petFavorite);

    const addFavoriteHandler = () => {
        if (petFavorite < petCounter) {
                dispatch(petFavoriteIncrement(1));
        }
    }

    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>New component - Add Pet to Favorite</h1>
            <button onClick={addFavoriteHandler}>Add Favorite</button>
            <button onClick={() => dispatch(petFavoriteDecrement())}>Remove Favorite</button>
            <h2>Favorites {petFavorite}</h2>
            <p>You can't add Favorites if favorites number = favorites total.</p>
            <p>You can't have negative numbers of pets neither favorites.</p>
        </div>
    );

}

export default NewApp;