import React from 'react'; 
import Loader from "react-loader-spinner";


const LoadingPage = () => {
    return (
        <div id="loadingPage" className="fade-out">
           
         <Loader
        type="Watch"
        color="#515757"
        height={80}
        width={80}
      />
        </div>
    );
}
 
export default LoadingPage;