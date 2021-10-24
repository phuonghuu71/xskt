import * as api from '../api';

// crud
export const getLotteries = (province, date) => async (dispatch) => {
    try {
        const { data } = await api.fetchLotteries(province, date);
        dispatch({ type: 'FETCH_ALL_LOTTERIES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createLottery = (lottery) => async (dispatch) => {
    try {
        const { data } = await api.createLottery(lottery);
        dispatch({ type: 'CREATE_LOTTERY', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateLottery = (id, lottery) => async (dispatch) => {
    try {
        const { data } = await api.updateLottery(id, lottery);
        dispatch({ type: 'UPDATE_LOTTERY', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteLottery = (_id) => async (dispatch) => {
    try {
        await api.deleteLottery(_id);
        dispatch({ type: 'DELETE_LOTTERY', payload: _id });
    } catch (error) {
        console.log(error.message);
    }
};
