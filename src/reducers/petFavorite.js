const petFavorite = (state = 5, action) => {
    switch (action.type) {
        case "PET_FAVORITE_INCREASED":
            return state + action.payload;
        case "PET_FAVORITE_DECREASED":
            if (state > 0) {
                return state - 1;
            } else {
                return state;
            }
            
        default:
            return state;
    }
};

export default petFavorite;