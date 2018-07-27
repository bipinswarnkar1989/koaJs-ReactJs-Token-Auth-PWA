export const login = (payload,history) => {
    return {
        type:'REQUEST_LOGIN',
        history,
        payload
    }
}

export const authenticate = (token,history) => {
    return {
        type:'REQUEST_AUTHENTICATION',
        token,
        history
    }
}

export const logout = () => {
    return {
        type:'REQUEST_LOGOUT'
    }
}