import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://593cdf8fb56f410011e7e7a9.mockapi.io/',
});

export const dispatchRequest = async (request: AxiosRequestConfig) => {
  try {
    axiosInstance.defaults.headers!.common['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers!.common!.Accept = 'application/json';

    const resource = await axiosInstance.request(request);
    return Promise.resolve(resource);
  } catch (error) {
    Promise.reject(error);
  }
};
