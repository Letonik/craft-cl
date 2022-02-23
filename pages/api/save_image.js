import * as axios from "axios";
const $instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:5000/api/`,
});

async function handler(req, res) {
    console.log(req.body)
    const data = await $instance.post('edit/add-image', req.body, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
    res.status(200).json("data.data")
}

export default handler
