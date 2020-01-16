import request from '../../../utils/request';

export function getUserInfo(params) {
    return request(`/auth/getUserInfoByUserId/${params.userId}`);
}