import axios from "axios";

export default class GithubApi {

    static attemptGetGithubUser(username) {
        return axios.request({
            url: `https://api.github.com/users/${username}`,
            method: "GET"
        });
    }
    static attemptGetGithubUserFolowers(username) {
        return axios.request({
            url: `https://api.github.com/users/${username}/followers`,
            method: "GET"
        });
    }

    static attemptGetGithubRepos(username) {
        return axios.request({
            url: `https://api.github.com/users/${username}/repos`,
            method: "GET"
        });
    }

}