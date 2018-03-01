
export const actions = {
    ATTEMPT_GET_GITHUB_USER: "ATTEMPT_GET_GITHUB_USER",
    GET_GITHUB_USER_SUCESSED: "GET_GITHUB_USER_SUCESSED",
    GET_GITHUB_USER_FAILED: "GET_GITHUB_USER_FAILED",

    GET_WEATHER_SUCESSED: "GET_WEATHER_SUCESSED"
};
export function getGithubUserSuccesed(user, followers,repositories) {
    return { type: actions.GET_GITHUB_USER_SUCESSED, payload: {user: user ,followers: followers,repositories: repositories }};
}

export function getGithubUserFailed(error) {
    return { type: actions.GET_GITHUB_USER_FAILED, payload: {error }};
}

export function attemptGetGithubUser(username) {
        return { type: actions.ATTEMPT_GET_GITHUB_USER, payload: { username }};
}

export function getWeatherSuccesed(weather) {
        return { type: actions.GET_WEATHER_SUCESSED, payload: { weather }};
}
