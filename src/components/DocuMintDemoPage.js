import { useState } from "react";
import DocuMintLogin from "../gif/DocuMintLogin.gif";
import DocuMintSearchAndView from "../gif/DocuMintSearchAndView.gif";
import DocuMintFilterAndSort from "../gif/DocuMintFilterAndSort.gif";

const minPageNUmber = 0;
const maxPageNumber = 2;

const DocuMintDemoPage = () => {
    const [pageNumber, setPageNumber] = useState(0);

    const handleRightButtonClick = () => {
        if (pageNumber < maxPageNumber) {
            setPageNumber(pageNumber + 1);
        }
    }

    const handleLeftButtonClick = () => {
        if (pageNumber > minPageNUmber) {
            setPageNumber(pageNumber - 1);
        }
    }

    return (  
        <div className="demo-page">
            <h1 className="demo-page-title">DocuMint Demo</h1>
            <div className="demo-explanation-row-container">
                <span className="demo-page-button-left-container">
                    {pageNumber > minPageNUmber && <span className="arrow-button arrow-left " onClick={handleLeftButtonClick}></span>}
                </span>
                {pageNumber == 0 && <span className="demo-gif-explanation">First, login to the application using company credentials</span>}
                {pageNumber == 1 && <span className="demo-gif-explanation">Search for student documents by studentID.</span>}
                {pageNumber == 2 && <span className="demo-gif-explanation">Filter and sort results to find documents easily.</span>}
                <span className="demo-page-button-right-container">
                    {pageNumber < maxPageNumber && <span className="arrow-button arrow-right demo-page-button-right" onClick={handleRightButtonClick}></span>}
                </span>
            </div>
            <div>
                {pageNumber == 0 && <img className="demo-gif" src={DocuMintLogin}></img>}
                {pageNumber == 1 && <img className="demo-gif" src={DocuMintSearchAndView}></img>}
                {pageNumber == 2 && <img className="demo-gif" src={DocuMintFilterAndSort}></img>}
            </div>
        </div>
    );
}
 
export default DocuMintDemoPage;