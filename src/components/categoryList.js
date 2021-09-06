import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import React from 'react'; 
// import useFetch from "../hooks/useFetch";

const CategoryList = ({ query }) => {

    // const { data: allCategories, isLoading, error } = useFetch(url) // disabling rest calls usinng graphQL now
    const { data: allCategories, isLoading, error } = useQuery(query)
    // console.log(allCategories);

    return (
        <section id="categorylist">
            {error &&
                <div>
                    <h6>Categories couldn't be loaded</h6>
                  <p>({error.message})</p>
                    <br />
                </div>}
            {isLoading && <p>Loading Categories...</p>}

            {allCategories && (
                <div>
                    <h4>
                        {allCategories.categories.map(category => (
                          
                            <Link key={category.id} to={`/categories/${category.slug}`}>
                                <span className="badge badge-secondary">{category.name}</span>
                            </Link>
                          
                        )
                        )}
                    </h4>
                </div>)}
        </section>);
}

export default CategoryList;