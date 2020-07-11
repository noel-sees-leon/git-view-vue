import AbstractService from './AbstractService.js';
import axios from 'axios';

export default class Github extends AbstractService {
    constructor() {
        super();
    }

    getUserProfile(username, callback) {
        axios.get("https://api.github.com/users/" + username)
            .then((response) => {
                console.log(response.data)
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
                callback(null);
            });
    }
    getUserRepository(username, repository, callback) {
        axios.get("https://api.github.com/repos/" + username + "/" + repository)
            .then((response) => {
                console.log(response.data)
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
                callback(null);
            });
    }

    getUserStream(username, callback) {
        axios.get("https://api.github.com/users/" + username + "/events/public")
            .then((response) => {
                console.log(response.data)
                callback(response.data);
            })
            .catch((error) => {
                console.log(error);
                callback(null);
            });

    }
}