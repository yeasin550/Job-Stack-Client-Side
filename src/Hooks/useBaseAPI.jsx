import axios from 'axios'
const baseApi = axios.create({ baseURL: 'https://chat-app-project-server.vercel.app' });

const useBaseAPI = () => {
    return [baseApi];
};

export default useBaseAPI;