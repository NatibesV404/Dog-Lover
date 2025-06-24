import { useParams } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../data/blogs";
import { useState } from "react";
import "./Details.css";

function Details() {
    const {id} = useParams()
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [content,setContent] = useState("");

    useEffect(()=>{
        const result = blogs.find((item)=>item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        // eslint-disable-next-line
    },[])
    
    return (
        <div className="container">
            <h2 className="title">{title}</h2>
            <img src={image} alt={title} className="blog-img"></img>
            <div className="blog-detail">
                <h3 className="topic-content">ลักษณะทั่วไป</h3>
                <hr></hr>
                <p className="content">{content}</p>
            </div>
        </div>
    );
}

export default Details;