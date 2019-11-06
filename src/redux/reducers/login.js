import Cookies from 'js-cookie'

const INITIAL_STATE = {
    loading: false,
    loaded: true,
    error: false,
    logged: false,
    data: {}

}

export default function Login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                ...action.payload && action.payload,
                logged: false,
                loading: true,
                loaded: false,
                error: false,
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                ...action.payload && action.payload,
                loading: false,
                loaded: true,
                error: false,
                logged: true,
                data: action.data && action.data,
            }
        }
        case 'LOGIN_ERROR': {
            return {
                ...state,
                ...action.payload && action.payload,
                loading: false,
                loaded: true,
                logged: false,
                error: true,
            }
        }
        case 'LOGIN_LOGOUT': {
            Cookies.remove('name')
            Cookies.remove('cpf')
            Cookies.remove('id')
            return {
                ...INITIAL_STATE,
            }
        }
        default:
            return state
    }
}