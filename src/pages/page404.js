import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <div id="page404">
            <h3>
                Sorry page can't be found
            </h3>
            <Link to='/'>Back to Homepage</Link>
        </div>
     );
}
 
export default Page404;