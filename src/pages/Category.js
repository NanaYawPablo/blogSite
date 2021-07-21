import { useParams } from "react-router-dom";

const Category = () => {

    const { id } = useParams()

    return (
        <div id="about">
            <h1>Category</h1>
            <p>ID : {id}</p>

        </div>
    );
}

export default Category;