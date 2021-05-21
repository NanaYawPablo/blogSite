import { Badge, Button } from "react-bootstrap";
import { Link45deg } from "react-bootstrap-icons";


const ArticleCard = () => {
    return ( 
        <div>
<div className="articleCard mb-3">
                                            <div className="articleCard-img" style={{ backgroundImage: "url(https://booksnresearch.com/wp-content/uploads/2020/05/banner1.jpg)" }}>
                                                <div className="articleCard-img-overlay d-flex flex-column justify-content-between" style={{ overflowY: "scroll" }}>
                                                    <h4 className="card-title">An Evaluation of Data Erasing Tools</h4>

                                                    <p className="card-text">
                                                        This paper analyzes the efficiency of a number of these tools in performing erasures on...</p>
                                                    <Button className="button btn-success" href="https://commons.erau.edu/jdfsl/vol15/iss1/2/" target="_blank" rel="noopener noreferrer">
                                                        <Link45deg /> Read More...</Button>
                                                    <div className="projectBadges">
                                                        <Badge variant="primary" className="badge">ACADEMIC PAPER</Badge>
                                                        <Badge variant="secondary" className="badge">DIGITAL FORENSICS</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

        </div>
     );
}
 
export default ArticleCard;