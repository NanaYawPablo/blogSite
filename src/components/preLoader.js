import { Heart } from 'react-spinners-css';
import React from 'react'; 

const PreLoader = () => {
    return (
        <div id="preloader">
            <br/>
            <Heart color="grey" />
            <br/>
        </div>
    );
}

export default PreLoader;