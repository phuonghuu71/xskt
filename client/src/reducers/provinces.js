const variable = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                ...state,
                provinces: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,

            };
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map((province) =>
                province._id === action.payload._id ? action.payload : province
            );
        case 'DELETE':
            return state.filter((province) => province._id !== action.payload);
        default:
            return state;
    }
};

export default variable;
