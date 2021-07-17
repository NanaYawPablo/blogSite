
import { samplePosts } from "../constants/samplePosts";
import useFetch from "../helpers/useFetch";
import ArticleCard from "./articleCard";
import PreLoader from './preLoader'
// import axios from "axios";

const AllPosts = () => {

    const { data: allPosts, isLoading, error } = useFetch(samplePosts)

    return (
        <div>
            {error && <div><h3> {error} </h3></div>}
            {isLoading && (<PreLoader />)}
            {
                allPosts && (
                    allPosts.map(post => (
                        <div key={post.id}>
                            <ArticleCard
                                title={post.title} date={post.date}
                                tag={post.tag} author={post.author}
                                description={post.description} image={post.image}
                            />
                        </div>)
                    )
                )
            }
        </div>
    );
}

export default AllPosts;