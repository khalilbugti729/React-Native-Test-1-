import axios from 'axios';
export const HomeApi = () => {
    var config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/Posts',
        headers: {}
    };

    return axios(config);
}