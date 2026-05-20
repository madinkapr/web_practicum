import { Navbar } from "../Components/Navbar";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                setPosts(json);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Navbar />
            
            <div className="page">
                <div className="posts-header">
                    <h1 className="posts-header__title">All Posts</h1>
                    {!loading && (
                        <p className="posts-header__count">{posts.length} articles found</p>
                    )}
                </div>

                {loading ? (
                    <div className="loading-grid">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="loading-card">
                                <div className="skeleton skeleton--tag" />
                                <div className="skeleton skeleton--line-full" />
                                <div className="skeleton skeleton--line-75" />
                                <div className="skeleton skeleton--link" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="posts-grid">
                        {posts.map(post => (
                            <NavLink key={post.id} to={`/posts/${post.id}`} className="post-card">
                                <span className="post-card__num">#{post.id}</span>
                                <p className="post-card__title">{post.title}</p>
                                <span className="post-card__arrow">Read more →</span>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
