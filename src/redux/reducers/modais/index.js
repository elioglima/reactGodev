const INITIAL_STATE = {
    modais: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'OPEN_MODAL': {
            const id = action.id
            let modais = state
            const modal = action
            modal.show = true
            modais[id] = modal
            return modais
        }
        case 'CLOSE_MODAL': {
            const id = action.id
            let modais = state
            let modal = modais[id]
            if (!modal) modal = {}
            modal.show = false
            modais[id] = modal
            return modais
        }
        case 'TOGGLE_MODAL': {
            const id = action.id
            let modais = state
            let modal = modais[id]
            if (!modal) modal = {}
            modal.show = !modal.show
            modais[id] = modal
            return modais
        }
        case 'SOLICITAR_LOGIN_SUCCESS': return ({ ...INITIAL_STATE })
        default:
            return state
    }
}