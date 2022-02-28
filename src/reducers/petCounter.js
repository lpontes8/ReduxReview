const petCounter = (state = 10, action) => {
    switch (action.type) {
        case "PET_INCREASED":
            return state + action.payload;
        case "PET_DECREASED":
            if (state > 0) {
                return state - 1;
            } else {
                return state;
            }
        default:
            return state;
    }

};

export default petCounter;