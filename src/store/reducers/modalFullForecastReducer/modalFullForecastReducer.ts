const TOGGLE_MODAL_FULL_FORECAST = 'TOGGLE_MODAL_FULL_FORECAST'

const defaultState = {
    isOpenFullPage: false
}

export const modalFullForecastReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_FULL_FORECAST:
            return {...state, isOpenFullPage: !state.isOpenFullPage}
        default:
            return state
    }
}

export const toggleModalFullForecastAction = () => ({type: TOGGLE_MODAL_FULL_FORECAST})

