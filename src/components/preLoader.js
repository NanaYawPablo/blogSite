import React from 'react';
import Loader from "react-loader-spinner";

const PreLoader = () => {
    return (
        <div id="preloader">
            <br />
            <Loader
        type="Watch"
        color="#515757"
        height={40}
        width={40}
        // timeout={3000} 
      />
            <br />
        </div>
    );
}

export default PreLoader;