import React, {useEffect, useState} from 'react';
import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = ({singleComment}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getCommentById(singleComment).then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments}