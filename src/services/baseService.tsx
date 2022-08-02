import axios, { AxiosRequestConfig } from "axios";
import moment from 'moment-timezone';
import { BASE_URL } from "../constants/index";
import {
  responseInterceptor,
  errorInterceptor,
  requestInterceptor,
} from './interceptors';

const baseAxios = axios.create({
  baseURL: BASE_URL,
  validateStatus: function (status) {
    return (
      status === 200 || // Success
      status === 400 || // Fail
      status === 401 || // Access token expired
      status === 403 || // Refresh token expired
      status === 500    // Crash error
    );
  }
})

baseAxios.interceptors.request.use(requestInterceptor, errorInterceptor);
baseAxios.interceptors.response.use(responseInterceptor, errorInterceptor);

enum AcceptType {
  json = 'application/json',
  formData = 'multipart/form-data',
  urlEncode = 'application/x-www-form-urlencoded',
}

const defaultHeader = {
  Accept: AcceptType.json,
  'Content-Type': AcceptType.json,
  TimeZone: moment.tz.guess(),
};

const config = {};
const headers = {
  ...defaultHeader,
};

const getRequest = (url: string, headers?: any) => {
  return baseAxios.get(url, {
    ...config,
    // data: body,
    headers
  });
};

const postRequest = (url: string, headers?: any) => {
  return baseAxios.post(url, {
    ...config,
    // data: body,
    headers
  });
};

const putRequest = (url: string, headers?: any) => {
  return baseAxios.put(url, {
    ...config,
    // data: body,
    headers
  });
};

const deleteRequest = (url: string, headers?: any) => {
  return baseAxios.delete(url, {
    ...config,
    // data: body,
    headers
  });
};

export default { getRequest, postRequest, putRequest, deleteRequest }