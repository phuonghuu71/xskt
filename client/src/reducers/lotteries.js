const variable = (state = { lotteries: [] }, action) => {
    switch (action.type) {
        case 'FETCH_ALL_LOTTERIES':
            return {
                ...state.lotteries,
                lotteries: action.payload.data,
            };
        case 'CREATE_LOTTERY':
            return [...state.lotteries, action.payload];
        case 'UPDATE_LOTTERY':
            return {
                lotteries: state.lotteries.map((lottery) =>
                    lottery._id === action.payload._id
                        ? action.payload
                        : lottery
                ),
            };
        case 'DELETE_LOTTERY':
            return {
                provinces: state.lotteries.filter(
                    (lottery) => lottery._id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default variable;
