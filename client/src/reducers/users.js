const variable = (state = { users: [] }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state.users,
                user: action.payload.user,
                message: action.payload.message,
            };
        case 'AUTH':
            return {
                ...state.users,
                message_auth: action.payload.message_auth,
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
