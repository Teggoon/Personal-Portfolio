import ProjectTabComponent from "./ProjectTabComponent";
import documint_thumbnail from "../image/documint_thumbnail.png"
import agora_thumbnail from "../image/agora_thumbnail.png"
import shockwaveio_thumbnail from "../image/shockwaveio_thumbnail.png"
import sduhelper_thumbnail from "../image/sduhelper_thumbnail.png"

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
                ]}
            hasSourceCode={false}
            hasProjectDemo={true}
            projectDemoLink={"/documintdemo"}
            demoLinkType={"localLink"}
            thumbnail={documint_thumbnail}
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
            hasProjectDemo={true}
            projectDemoLink={"https://agora.bid"}
            demoLinkType={"externalLink"}
            thumbnail={agora_thumbnail}
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
            hasProjectDemo={true}
            projectDemoLink={"http://localhost:5000"}
            demoLinkType={"externalLink"}
            thumbnail={shockwaveio_thumbnail}
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
            hasProjectDemo={true}
            projectDemoLink={"/sduhelperdemo"}
            demoLinkType={"localLink"}
            thumbnail={sduhelper_thumbnail}
            />
        </div>
    );
}
 
export default ProjectsPage;