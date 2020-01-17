import request from '../../../utils/request';

export function uploadMdFile(params) {
    return request(`/upload/uploadMdFile`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        method: 'POST',
        body: params,
    });
}