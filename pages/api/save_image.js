/*const $instance = axios.create({
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

export default handler*/

import * as axios from "axios";
import middleware from '../../middleware/middleware'
import nextConnect from 'next-connect';
const $instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:5000/api/`,
});
const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
        const {image} = req.files
  console.log(image)
/*  console.log(image)*/
/*        let formData = new FormData();
          formData.append('image', {image});
        const data = await $instance.post('edit/add-image', {image}, {
            headers: {'Content-Type': 'multipart/form-data'}
        })*/
        res.status(200).json('data.data')
});

export const config = {
    api: {
        bodyParser: false,
    },
}

export default handler;
