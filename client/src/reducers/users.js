const variable = (state = { users: [] }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state.users,
                user: action.payload.user,
                message: action.payload.message,
            };
        case 'REGISTER':
            return {
                ...state.users,
                user: action.payload.user,
                message: action.payload.message,
            };
        default:
            return state;
    }
};

export default variable;
