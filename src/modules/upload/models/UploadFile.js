import * as services from '../services/UploadFile';

export default {

    namespace: 'upload',

    state: {
        result: {},
    },

    effects: {
        * uploadMdFile({payload}, {put, call}) {
            console.log(111);
            const result = yield call(services.uploadMdFile, payload);
            if (result) {
                yield put({
                    type: 'updateState',
                    payload: {
                        result: result.data
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
