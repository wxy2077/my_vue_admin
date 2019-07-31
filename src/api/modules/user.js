import request from '../request'

// 刷新token
export function refershToken(params) {
    return request({
        url: '/user/auth',
        method: 'get',
        data:params
    })
}

// 登陆
export function login(params) {
    return request({
        url: '/user/auth',
        method: 'POST',
        data:params
    })
}


export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}