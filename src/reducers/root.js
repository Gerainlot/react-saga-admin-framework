const defaultState = {
    loading: false,
    error: false
}
  
export const root = (state = defaultState, action) => {
    switch (action.type) {
        case "ROOT_LOADING_UPDATE" :
            return {
                loading: action.value,
                error: false
            }
        case "ROOT_LOADING_FAILURE" :
            return {
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}