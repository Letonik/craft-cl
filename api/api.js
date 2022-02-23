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
  saveImage(data) {
    return axios.post(`/api/save_image`, data, {
      headers: {'Content-Type': 'multipart/form-data'}
    })
  },
/*  getLocation() {
    return $instance.get(`api/show_location`)
  },
  getLocation() {
    return $instance.get(`location`)
  },*/
  deleteL(id) {
    return $instance.delete(`location`, {data: {id}})
  },
  changeLocation(data) {
    return $instance.put(`location`, data)
  },
}
