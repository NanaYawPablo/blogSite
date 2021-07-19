import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id, title }= useParams() 

    return (
        <div id="about"> 
            <h1>BLOG DETAILS</h1>
            <p>ID : {id}</p>
            <p>Title : {title}</p>

        </div>
    );
}

export default BlogDetails;

