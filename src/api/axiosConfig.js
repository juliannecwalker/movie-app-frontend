import axios from 'axios';

export default axios.create({
    // base URL comes from ngrok http 8080
    baseURL:'https://4b86-2601-19b-681-cf90-ed36-39d3-ac20-66d1.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
