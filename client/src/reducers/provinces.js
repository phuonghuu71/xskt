const variable = (state = { provinces: [] }, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                ...state.provinces,
                provinces: action.payload.data,
                numberOfPages: action.payload.numberOfPages,
            };
        case 'CREATE':
            return [...state.provinces, action.payload];
        case 'UPDATE':
            return {
                provinces: state.provinces.map((province) =>
                    province._id === action.payload._id
                        ? action.payload
                        : province
                ),
            };
        case 'DELETE':
            return {
                provinces: state.provinces.filter(
                    (province) => province._id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default variable;
