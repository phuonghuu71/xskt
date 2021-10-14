import * as api from '../api';

// crud
export const getLotteries = (province, date) => async (dispatch) => {
    try {
        const { data } = await api.fetchLotteries(province, date);
        console.log(data);
        dispatch({ type: 'FETCH_ALL_LOTTERIES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// export const createProvince = (province) => async (dispatch) => {
//     try {
//         const { data } = await api.createProvince(province);
//         dispatch({ type: 'CREATE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// export const updateProvince = (id, province) => async (dispatch) => {
//     try {
//         const { data } = await api.updateProvince(id, province);
//         dispatch({ type: 'UPDATE', payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// export const deleteProvince = (id) => async (dispatch) => {
//     try {
//         await api.deleteProvince(id);
//         dispatch({ type: 'DELETE', payload: id });
//     } catch (error) {
//         console.log(error.message);
//     }
// };
