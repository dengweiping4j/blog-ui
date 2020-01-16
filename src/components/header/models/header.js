import * as services from '../services/Header';

export default {

    namespace: 'header',

    state: {
        userInfo: {},
    },

    effects: {
        * getUserInfo({payload}, {put, call}) {
            const result = yield call(services.getUserInfo, payload);
            if (result) {
                yield put({
                    type: 'updateState',
                    payload: {
                        userInfo: result.data
                    }
                });
            }
        },
    },


    reducers: {
        updateState(state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
    },

};
