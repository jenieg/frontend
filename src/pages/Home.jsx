import React from "react";
import { useState, useEffect } from "react";
import PostHead from "../components/PostHead";
import styles from '../styles/styles.module.scss';

const Home = () => {

    const [posts, setPosts] = useState(null);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4040/api/posts');
            const json = await response.json();
            if (response.ok) setPosts(json);
        }
        fetchPosts();
    }, []);

    return (
        <>
            <div>
                <h1>Posts</h1>

                <ul className={styles.postList}>
                    {posts && posts.map(post => (
                        <PostHead key={post._id} post={post} />
                    ))}
                </ul>
            </div>
        </>
    )
};

export default Home;
