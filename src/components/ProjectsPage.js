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
            description="A website enabling University of Phoenix
            IT employees to view pdf documents stored in their AWS S3 database."
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

{/*             
            <ProjectTabComponent 
            title="Full-Stack Development of Template Crunch"
            description="A website where University of Phoenix enrollment 
            employees can create hundreds of E-sign templates at the touch of a few buttons."
            technologies={
                ["Frontend: React, CSS", 
                "Backend: Node & Express, Python",
                ]}
            hasSourceCode={false}
            hasProjectDemo={true}
            projectDemoLink={"/documintdemo"}
            demoLinkType={"localLink"}
            thumbnail={documint_thumbnail}
            /> */}
            
            <ProjectTabComponent 
            title="Shockwave.io online multiplayer game"
            description="A multiplayer game where players jump around and kill each other with shockwaves
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
            
            <ProjectTabComponent 
            title="Backend database management of Agora, a cryptocurrency-browsing website"
            description="Node.js script that populates our Firebase database with cryptocurrency market data from 19
            cryptocurrency exchanges."
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

            <h2>Software</h2>

            <ProjectTabComponent 
            title="SDU Helper, a Windows Desktop application for University of Phoenix"
            description="An application that generates
            XMLs based on the results of SQL queries to a financial-aid document database."
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