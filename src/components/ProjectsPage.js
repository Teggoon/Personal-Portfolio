import ProjectTabComponent from "./ProjectTabComponent";
const ProjectsPage = () => {
    return ( 
        <div className="project-page">
            <h2>Web development</h2>

            <ProjectTabComponent 
            title="Full-Stack Development of DocuMint"
            description="DocuMint was a web application enabling University of Phoenix
            employees to view pdf documents stored in their AWS S3 database."
            technologies={
                ["Frontend: React, CSS", 
                "Backend: Node & Express, SQL", 
                "Automated testing: Jest, Enzyme",
                "Security: LDAP authentication"
                ]}
            hasSourceCode={false}
            hasProjectDemo={false}
            />
            
            <ProjectTabComponent 
            title="Backend database management of Agora, a cryptocurrency-browsing website"
            description="Co-wrote script to fetch cryptocurrency market data from the public APIs of 19
            popular cryptocurrency exchanges, and populate them into our Firebase database."
            technologies={
                ["Node.js"
                ]}
            hasSourceCode={true}
            sourceCodeLink={"https://github.com/Teggoon/AgoraDatabaseCode"}
            hasProjectDemo={false}
            />

            <ProjectTabComponent 
            title="Shockwave.io online multiplayer game"
            description="Created a multiplayer game where players jump around and kill each other with shockwaves
            on the ground."
            technologies={
                ["Frontend: vanilla Javascript & HTML",
                "Backend: Node.js, web sockets"
                ]}
            hasSourceCode={true}
            sourceCodeLink={"https://github.com/Teggoon/Shockwaveio-Online-Multiplayer-Game"}
            hasProjectDemo={false}
            />
            
            <h2>Software</h2>

            <ProjectTabComponent 
            title="SDU Helper, a Windows Desktop application for University of Phoenix"
            description="This is an application written in C#. As a support tool for IT employees, it generates
            XML files based on the results of SQL queries to their financial-aid document database."
            technologies={
                ["C#, SQL",
                ]}
            hasSourceCode={false}
            hasProjectDemo={false}
            />
        </div>
    );
}
 
export default ProjectsPage;