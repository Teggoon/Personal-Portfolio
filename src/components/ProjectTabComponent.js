import external_link_image from "../image/external_link_image.png"
import { Link } from "react-router-dom";
const ProjectTabComponent = ({title, description, technologies, hasSourceCode, sourceCodeLink, hasProjectDemo, projectDemoLink, demoLinkType, thumbnail}) => {
    return ( 
        <div className="project-component-container">
                <div className="columns-side-by-side">

                    <div className="project-component-left-side-container">
                        <div className="project-component-flex-container">
                            <div className="project-title-description-container">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="project-links-container">
                                { hasProjectDemo && demoLinkType == "localLink" &&
                                    <Link to={projectDemoLink} className={"view-project-demo-link project-related-link"} target="_blank">
                                        View Demo
                                        <img className="external-link-image" src={external_link_image} ></img>
                                    </Link>
                                }
                                
                                {hasProjectDemo && demoLinkType == "externalLink" &&
                                    <a className="view-project-demo-link project-related-link" href={projectDemoLink} target="_blank">
                                        View Demo
                                        <img className="external-link-image" src={external_link_image}></img>
                                    </a>
                                }

                                {hasSourceCode && 
                                    <a className="view-project-code-link project-related-link" href={sourceCodeLink} target="_blank">
                                        View code
                                        <img className="external-link-image" src={external_link_image}></img>
                                    </a>
                                }

                                {!hasSourceCode && 
                                    <span className="unavailable-code-link">
                                        View code
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="project-thumbnail-container">
                        {demoLinkType == "localLink" &&
                        <Link to={projectDemoLink} target="_blank">
                            <img src={thumbnail} className="project-thumbnail"></img>
                        </Link>
                        }
                        {hasProjectDemo && demoLinkType == "externalLink" && 
                        <a href={projectDemoLink} target="_blank">
                            <img src={thumbnail} className="project-thumbnail"></img>
                        </a>
                        
                        }
                    </div>
                    {/*<div className="technologies-used-container">
                        <h5>Technologies used: </h5>
                        <ul>
                            {technologies.map((technology, index) => {
                                return <li key={index}>{technology}</li>
                            })}
                        </ul>
                    </div>*/}
                </div>
        </div>
    );
}
 
export default ProjectTabComponent;