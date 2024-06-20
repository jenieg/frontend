import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles.module.scss";

const PostHead = ({ post }) => {
    return (
        <li>
            <span className={styles.PostHeadHeader}>
                <h2>
                    <Link to={`/api/posts/${post._id}`}>{post.title}</Link>
                </h2>
                <span class="material-symbols-outlined">delete</span>
            </span>
            <div>{post.date}</div>
            <p>{post.content.substring(0,200) + ' ...'}</p>
        </li>
    );
};

export default PostHead;
