
import Cookies from 'js-cookie'


export function getToken(token_name) {
    return Cookies.get(token_name)
}

export function setToken(token_name, token) {

    return Cookies.set(token_name, token)
}

export function removeToken(token_name) {
    return Cookies.remove(token_name)
}
