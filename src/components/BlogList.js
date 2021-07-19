import { Link } from "react-router-dom";
import useFetch from "../helpers/useFetch";
import ArticleCard from "./articleCard";
import PreLoader from './preLoader'
// import axios from "axios";

const BlogList = ({samplePosts}) => {

    const { data: allPosts, isLoading, error } = useFetch(samplePosts)

    return (
        <div>
            {error && <div><h3> {error} </h3></div>}
            {isLoading && (<PreLoader />)}
            {
                allPosts && (
                    allPosts.map(post => (
                        <div className="postPreview" key={post.id}>
                            <Link to={`/blogs/${post.id}/${post.title}`}>
                            <ArticleCard
                                title={post.title} date={post.date}
                                tag={post.tag} author={post.author}
                                description={post.description} image={post.image}
                            />
                            </Link>
                        </div>)
                    )
                )
            }
        </div>
    );
}

export default BlogList;