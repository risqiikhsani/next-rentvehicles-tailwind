import Axios from "axios";
import Cookies from 'js-cookie'

const api = Axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
api.interceptors.request.use(
    function (config) {
      // Do something before request is sent
  
      const access_token = Cookies.get('accesstoken')
      if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
      }
  
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

export default api;