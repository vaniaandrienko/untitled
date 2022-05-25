import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getPostId: (id) => axiosService.get(`${urls.posts}?getPost=/${id}`)
}

export {
    postService
}