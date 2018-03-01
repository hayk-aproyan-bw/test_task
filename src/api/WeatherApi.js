import axios from "axios";

export default class WeatherApi {

    static attemptGetWeather(location) {

        axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`, {
            withCredentials: true
        })
            .then( (response) => {
                return axios.request({
                    url: `https://www.metaweather.com/api/location/${response.woeid}/`,
                    method: "GET"
                });
            })
            .catch( (error) => {
                console.log(error);
            });
    }

}