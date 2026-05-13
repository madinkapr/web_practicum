import { Navbar } from "../Components/Navbar";
import { useEffect, useState } from "react";

export function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);

    return <>
        <Navbar />

        {
            posts.map(post => <p key={post.id}>{post.title}</p>)
        }

    </>
}

