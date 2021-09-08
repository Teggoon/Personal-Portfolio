import external_link_image from "../image/external_link_image.png"
import { Link } from "react-router-dom";
const ProjectTabComponent = ({title, description, technologies, hasSourceCode, sourceCodeLink, hasProjectDemo, projectDemoLink, demoLinkType}) => {
    return ( 
        <div className="project-description-container">
                <div className="columns-side-by-side">

                    <div className="project-title-description-container">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        { hasProjectDemo && demoLinkType == "localLink" &&
                            <Link to={projectDemoLink} className={"view-project-demo-link project-related-link"} target="_blank">
                                View Demo
                                <img className="external-link-image" src={external_link_image} ></img>
                            </Link>
                        }
                        
                        {hasProjectDemo && demoLinkType == "externalLink" &&
                            <a className="view-project-demo-link project-related-link" href={projectDemoLink}>
                                View Demo
                                <img className="external-link-image" src={external_link_image}></img>
                            </a>
                        }

                        {hasSourceCode && 
                            <a className="view-project-code-link project-related-link" href={sourceCodeLink}>
                                View code
                                <img className="external-link-image" src={external_link_image}></img>
                            </a>
                        }

                        {!hasSourceCode && 
                            <span className="unavailable-code-link">
                                No code available
                            </span>
                        }
                    </div>
                    <div className="technologies-used-container">
                        <h5>Technologies used: </h5>
                        <ul>
                            {technologies.map((technology, index) => {
                                return <li key={index}>{technology}</li>
                            })}
                        </ul>
                    </div>
                </div>
        </div>
    );
}
 
export default ProjectTabComponent;