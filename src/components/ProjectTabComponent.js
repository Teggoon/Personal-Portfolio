import external_link_image from "../image/external_link_image.png"
const ProjectTabComponent = ({title, description, technologies, hasSourceCode, sourceCodeLink, hasProjectDemo, projectDemoLink}) => {
    return ( 
        <div className="project-description-container">
                <div className="columns-side-by-side">

                    <div className="project-title-description-container">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        {hasProjectDemo && 
                        <a className="view-project-demo-link project-related-link" href={projectDemoLink}>
                            View demo
                            <img className="external-link-image" src={external_link_image}></img>
                        </a>
                        }

                        {hasSourceCode && 
                        <a className="view-project-code-link project-related-link" href={sourceCodeLink}>
                            View code
                            <img className="external-link-image" src={external_link_image}></img>
                        </a>
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