import React from 'react';

const Post = ({post,setSingleComment}) => {
    const {userId,id, title, body} = post;
    return (
        <div>

            <div>userid:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button  onClick={()=>setSingleComment(post.id)}>get comment</button>

        </div>
    );
};

export {Post}