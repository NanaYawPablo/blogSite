import { Link } from "react-router-dom";

const CategoryList = () => {
    return (
    <section id="categorylist">
        <h4>
            <Link to={`/categories/1`}>
            <span className="badge badge-pill badge-secondary">Category 1</span>
            </Link>
            <Link to={`/categories/2`}>
            <span className="badge badge-pill badge-secondary">Category 2</span> 
            </Link>   
        </h4>
    </section>);
}

export default CategoryList;