import "./Blogs.css"
import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Blogs() {
    const [search,setSearch] = useState("");
    const [filterblog,setFilterblog] = useState([]);

    useEffect(()=>{
        const result = blogs.filter((item)=>item.title.includes(search))
        setFilterblog(result)
    },[search])
    return(
        <div className="blogs-container">
            <div className="search-container">
                <input type="text" 
                className="search-input" 
                placeholder="ค้นหาบทความ"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}></input>
            </div>
            <article>
                {filterblog.map((item)=>
                    <Link to={`/blog/${item.id}`} key={item.id}>
                        <div className="card">
                        <h2>{item.title}</h2>
                        <p>{(item.content.substring(0,400))}...</p>
                        <hr />

                    </div>
                    </Link>
                )}
            </article>
        </div>
    );
}

export default Blogs;