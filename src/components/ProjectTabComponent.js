const ProjectTabComponent = ({title, description}) => {
    return ( 
        <div className="project-description-container">
                <h3>{title}</h3>
                <p>{description}</p>
        </div>
    );
}
 
export default ProjectTabComponent;