import React from "react";
import data from "../data/learning.json";
import PostContent from "./PostContent";
import {useState} from "react";

function PostList() {
    const [posts, setPosts] = useState(data);

    function changeStatus(id) {
        const updatePosts = [...posts];
        updatePosts.forEach((post) => {
            if (post.id === id) {
                post.status = false;
            }    

        });
    setPosts(updatePosts);    
    }

    const listas = posts.map((post) => {
        return (
            <PostContent
                key={post.id}
                id={post.id}
                title={post.taskTitle}
                content={post.content}
                img={post.img}
                status={post.status}
                changeStatus={changeStatus}
            />
        );
    });
    return <div className="row">{listas}</div>
}

export default PostList;