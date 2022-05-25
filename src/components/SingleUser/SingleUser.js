import React from 'react';

const SingleUser = ({user,setSinglePost}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            {id} -- {name} -- {username} -- {email}
            <button onClick={()=>setSinglePost(user.id)}>get post</button>
        </div>
    );
};

export {SingleUser}