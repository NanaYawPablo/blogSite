import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { HOMEPAGE_URL } from "../constants/urls";

const Page404 = () => {

    const [imageLoaded, setImageLoaded] = useState(false)
    const showImage = () => {
        setImageLoaded(true)
    }

    return (
        <div id="page404">

            <div className="img-container">

                {/* PlaceHolder Image */}
                <img src="https://ik.imagekit.io/afrifa/selim/tr:w-600,bl-30,q-50/404image.jpeg?updatedAt=1632520327779"
                    style={imageLoaded ? { display: "none" } : {}}
                    width="800" height="800"
                    className="img-fluid" alt="error page" />

                {/* Intended Image from ImageKit */}
                <img src="https://ik.imagekit.io/afrifa/selim/tr:w-600/404image.jpeg?updatedAt=1632520327779"
                    onLoad={showImage}
                    style={imageLoaded ? {} : { display: "none" }}
                    srcSet="https://ik.imagekit.io/afrifa/selim/tr:w-400/404image.jpeg?updatedAt=1632520327779 400w,
                https://ik.imagekit.io/afrifa/selim/tr:w-800/404image.jpeg?updatedAt=1632520327779 800w,
                https://ik.imagekit.io/afrifa/selim/tr:w-1200/404image.jpeg?updatedAt=1632520327779 1200w"
                width="800" height="800"
                className="img-fluid" alt="error page"  />

            </div>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to={HOMEPAGE_URL} id="fcf-button">Go to Homepage</Link>
        </div>
    );
}

export default Page404;