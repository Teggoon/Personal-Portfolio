const ProjectTabComponent = ({title, description}) => {
    return ( 
        <div className="project-description-container">
                <div className="columns-side-by-side">

                    <div className="project-title-description-container">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="technologies-used-container">
                        <h5>Technologies used: </h5>
                        <ul>
                            <li>Frontend: React, CSS, HTML tables</li>
                            <li>Backend: Node & Express, SQL</li>
                            <li>Automated testing: Jest, Enzyme</li>
                            <li>Security: LDAP authentication</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
 
export default ProjectTabComponent;