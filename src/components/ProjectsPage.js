import ProjectTabComponent from "./ProjectTabComponent";
const ProjectsPage = () => {
    return ( 
        <div>
            <h2>Frontend projects</h2>

            <ProjectTabComponent 
            title="Full-Stack Development of DocuMint"
            description="DocuMint was a web application enabling University of Phoenix
            employees to view pdf documents stored in their AWS S3 database. Since I built this
            project from scratch, I was able to get hands-on experience with various aspects of
            the web-development stack, with special emphasis on automated testing and frontend
            development.
            "
            />

            <div className="project-description-container">
                <h3>Website collecting user activity for potential business analysis</h3>
                <p></p>
            </div>


            <div className="project-description-container">
                <h3>Shockwave.io online multiplayer game</h3>
                
                <p></p>
            </div>
            
            <h2>Backend projects</h2>
            <div className="project-description-container">
                <h3>Database specialist at Agora: a crypto-trading website</h3>
                <p></p>
            </div>

            <div className="project-description-container">
                <h3>Windows desktop application that generates XMLs based on SQL queries</h3>
                <p></p>
            </div>
            
            <div className="project-description-container">
                <h3>Hosting my own VPN server on AWS</h3>
                <p></p>
            </div>
            
            <div className="project-description-container">
                <h3>Server-side plugins for Minecraft servers</h3>
                <p></p>
            </div>
            
        </div>
    );
}
 
export default ProjectsPage;