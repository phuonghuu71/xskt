const variable = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_LOTTERIES':
            return {
                ...state,
                lotteries: action.payload.data,
            };
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map((lottery) =>
                lottery._id === action.payload._id ? action.payload : lottery
            );
        case 'DELETE':
            return state.filter((lottery) => lottery._id !== action.payload);
        default:
            return state;
    }
};

export default variable;
