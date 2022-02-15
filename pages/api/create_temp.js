import * as axios from "axios";
const $instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:5000/api/`,
});

async function handler(req, res) {
  const data = await $instance.post('temps', {...req.body})
  res.status(200).json(data.data)
}

export default handler