import { Link } from "react-router-dom";
import React from 'react';

import Avatar from '../assets/images/404image.jpeg'
import { HOMEPAGE_URL } from "../constants/urls";

const Page404 = () => {
    return (
        <div id="page404">

            <div>
                <img src={Avatar}
                    className="img-fluid" alt="avatar" loading="lazy" />
            </div>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to={HOMEPAGE_URL} id="fcf-button">Go to Homepage</Link>
        </div>
    );
}

export default Page404;