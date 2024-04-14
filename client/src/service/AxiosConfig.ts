import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.PROCESS_POST_CAPTURE_API
});

export default instance;