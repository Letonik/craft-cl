import * as axios from "axios";

const $url = "http://localhost:5000/"
export {$url};


export const tempsAPI = {

  createTemp(name, code) {
    return axios.post(`/api/create_temp`, {name, code})
  },
  setActive(id, code) {
    return axios.post(`/api/change_active`, {id, code})
  },
  saveCode(code, id, html, device) {
    axios.put(`/api/save_code`, {code, id, html, device})
  },

}
