import {  Button } from "react-bootstrap";
import { Link45deg } from "react-bootstrap-icons";


const ArticleCard = () => {
    return (
        <div>
            <div className="movieCard">
                <div className="overlay">
                    <div className="cardContent">
                        <h1 className="cardTitle">
                            BLADE RUNNER </h1>
                        <span className="articleInfo">
                            LIFESTYLE
                        </span>
                        <p className="articleDesc">
                            A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.
                        </p>
                        <Button id="fcf-button" href="https://commons.erau.edu/jdfsl/vol15/iss1/2/" target="_blank" rel="noopener noreferrer">
                            <Link45deg /> Read More...</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;