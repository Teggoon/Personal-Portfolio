import TemplateCrunchGif from "../gif/TemplateCrunch.gif";

const TemplateCrunchDemoPage = () => {
    return (
        <div className="demo-page">

            <h1 className="demo-page-title">Template Crunch Demo</h1>
            <img className="demo-gif" src={TemplateCrunchGif}></img>
        </div> 
    );
}
 
export default TemplateCrunchDemoPage;