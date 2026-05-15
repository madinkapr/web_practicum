import { Navbar } from "../Components/Navbar";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";

export function Comments() {

    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(json => {
                setComments(json);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="page">
                <NavLink to={`/posts/${id}`} className="post-detail__back">← Back to post</NavLink>

                <div className="comments-header">
                    <h1 className="comments-header__title">Comments</h1>
                    {!loading && (
                        <p className="comments-header__count">{comments.length} comments on post #{id}</p>
                    )}
                </div>

                {loading ? (
                    <div className="comments-list">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="loading-card">
                                <div className="skeleton-header">
                                    <div className="skeleton skeleton--avatar" />
                                    <div className="skeleton-meta">
                                        <div className="skeleton skeleton--email" />
                                        <div className="skeleton skeleton--name" />
                                    </div>
                                </div>
                                <div className="skeleton skeleton--text-full" />
                                <div className="skeleton skeleton--text-80" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="comments-list">
                        {comments.map(comment => (
                            <CommentCard key={comment.id} comment={comment} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

function CommentCard({ comment }) {

    const initials = comment.email.slice(0, 2).toUpperCase();

    return (
        <div className="comment-card">
            <div className="comment-card__header">
                <div className="comment-card__avatar">{initials}</div>
                <div className="comment-card__meta">
                    <span className="comment-card__email">{comment.email}</span>
                    <span className="comment-card__name">{comment.name}</span>
                </div>
            </div>
            <p className="comment-card__body">{comment.body}</p>
        </div>
    );
}
