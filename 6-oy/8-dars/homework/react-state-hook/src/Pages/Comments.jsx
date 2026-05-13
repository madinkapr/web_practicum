import {Navbar} from "../Components/Navbar";
import { useEffect, useState} from "react";
import {useParams} from "react-router";

export function Comments() {

    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {   
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(json => setComments(json))
    }, []);


    return <>
        <Navbar /> <br />

        <h1 >Comments</h1><br />

        {
            comments.map(comment=> <CommentComponent key={comment.id} comment={comment} />)
        }
    </>
}

function CommentComponent({comment}) {

    return <>
        <h3>Email: {comment.email}</h3>
        <p>Name: {comment.name}</p>
        <p>Body: {comment.body}</p> <br />
    </>
}