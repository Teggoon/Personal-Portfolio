
const HomePage = () => {
    return ( 
        <div>
            <div className="homepage-section-1">
                <div className="homepage-main-intro-container">
                    <span className="vertical-line-animation" id="vertical-line-1"></span>
                    <span className="vertical-line-animation" id="vertical-line-2"></span>
                    <h2 className="homepage-name">Haocheng Li</h2>
                    <h3 className="homepage-title">Front-end & web developer</h3>
                    <h4 className="homepage-question">Have a business need I can meet?</h4>
                </div>
                <div className="scroll-down-suggestion">Scroll to see my experiences</div>
            </div>
            
            <div className="experience-section-container experience-section-1">
            <h3>Solid foundation in HTML, CSS, and Javascript</h3>
            <p>
            As a developer who strives to be competent and versatile in web development, 
            I've spent much time learning the fundamentals of core web technology: HTML, CSS, 
            Javascript, the DOM, and HTTP.
            </p>
            </div>

            <div className="experience-section-container experience-section-2">
            <h3>Full-stack awareness & exposure</h3>
            <p>
            During an internship at the University of Phoenix, I developed a web application for
            their employees from scratch, coming into contact with many facets of a software project: 
            frontend, backend, security, automated testing, and application monitoring.
            </p>
            </div>

            <div className="experience-section-container experience-section-3">
            <h3>Agile methodology</h3>
            <p>
            Having worked with an Agile scrum team during my internship, I have a solid understanding
            of the Agile principles of iterative development, customer collaboration, and 
            adaptiveness.
            </p>
            </div>
            
        </div>
    );
}
 
export default HomePage;