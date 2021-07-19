import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id }= useParams() 

    return (
        <div id="about"> 
            <h1>BLOG DETAILS</h1>
            <p>ID : {id}</p>

        </div>
    );
}

export default BlogDetails;

