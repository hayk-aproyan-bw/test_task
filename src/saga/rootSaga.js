import {call, put, takeLatest} from "redux-saga/effects";
import GithubApi from "../api/GithubApi";
import {actions, getGithubUserSuccesed, getGithubUserFailed, getWeatherSuccesed} from "../actions/index";
import WeatherApi from "../api/WeatherApi";

export function* attemptGetGithubUser(data) {
    try {
        const user =  yield call(GithubApi.attemptGetGithubUser, data.payload.username);
        const followers =  yield call(GithubApi.attemptGetGithubUserFolowers, data.payload.username);
        const repositories =  yield call(GithubApi.attemptGetGithubRepos, data.payload.username);
        const weather =  yield call(WeatherApi.attemptGetWeather, user.data.location);
        yield put(getGithubUserSuccesed(user.data,followers.data,repositories.data));
        yield put(getWeatherSuccesed(weather.data));
    } catch (error) {
        yield put(getGithubUserFailed(error));
    }
}


function* rootSaga() {
    yield takeLatest(actions.ATTEMPT_GET_GITHUB_USER, attemptGetGithubUser);
}

export default rootSaga;