import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryList = ({ url }) => {

    const { data: allCategories, isLoading, error } = useFetch(url)
    // console.log(allCategories);

    return (
        <section id="categorylist">
            {error &&
                <div>
                    <h6>Categories couldn't be loaded</h6>
                    <p>({error})</p>
                    <br />
                </div>}
            {isLoading && <p>Loading Categories...</p>}

            {allCategories && (
                <div>
                    <h4>
                        {allCategories.map(category => (
                          
                            <Link  key={category.id} to={`/categories/${category.id}`}>
                                <span className="badge badge-secondary">{category.name}</span>
                            </Link>
                          
                        )
                        )}
                    </h4>
                </div>)}
        </section>);
}

export default CategoryList;