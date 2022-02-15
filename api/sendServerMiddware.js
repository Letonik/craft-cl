import * as axios from "axios";
const $instance = axios.create({
  baseURL: `http://localhost:5000/api/`,
});
export const send = async (res, url, params = {}) => {
    const data = await $instance.post(url, {lang: 1, shop: 1, ...params})
    return {data, response:res}
}
export const getAll = async (url) => {
  const data = await $instance.get(url)
  return data
}