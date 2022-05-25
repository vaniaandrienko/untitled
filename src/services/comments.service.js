import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getCommentById: (id) => axiosService.get(`${urls.comments}?getComment=/${id}`)
}

export {
    commentService
}