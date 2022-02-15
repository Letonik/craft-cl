import * as axios from "axios";

const $url = "http://localhost:5000/"
export {$url};


export const tempsAPI = {

  createTemp(name, code) {
    return axios.post(`/api/create_temp`, {name, code})
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
