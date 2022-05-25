import {Comments, Posts, SingleUser, Users} from "./components";
import {useState} from "react";
import css from './App.css'

function App() {
    const [singleUser, setSingleUser] = useState();
    const [singlePost, setSinglePost] = useState();
    const [singleComment, setSingleComment] = useState();

    return (
        <div>
            <div className={'top-1'}>

                <Users getUser={setSingleUser}/>
                <hr/>
                {singleUser && <SingleUser user={singleUser} setSinglePost={setSinglePost}/>}
            </div>
            <hr/>
            <div className={'top-1'}>
                {singlePost && <Posts getPost={singlePost} setSingleComment={setSingleComment}/>}
                <hr/>
                {singleComment && <Comments getComment={singleComment}/>}

            </div>
        </div>
    );
}

export default App;
