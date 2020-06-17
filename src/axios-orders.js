import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2432d.firebaseio.com/'
});

export default instance;