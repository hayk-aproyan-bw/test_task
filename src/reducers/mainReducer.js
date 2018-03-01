
import {actions} from "../actions/index";

export const initialState = {}

export default (state, action ) => {
    switch (action.type) {
        case actions.GET_GITHUB_USER_SUCESSED:
            return Object.assign({}, state, {
                user: action.payload.user,
                followers: action.payload.followers,
                repositories: action.payload.repositories
            })
        case actions.GET_WEATHER_SUCESSED:
            return Object.assign({}, state, {
                weather: action.payload.weather
            })
        default:
            return state
    }
}
