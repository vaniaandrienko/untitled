import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({getPost,setSingleComment}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getPostId(getPost).then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} setSingleComment={setSingleComment} />)}
        </div>
    );
};

export {Posts}