import React from 'react';
import "../css/posts.css";

function Post(props) {
    return (
        <div className="post">
            <div className="post-name">{props.title}</div>
            <div className="post-content">{props.text}</div>
            <a className="post-source" href={props.url}>{props.name}</a>
        </div>
    );
}

export default Post;