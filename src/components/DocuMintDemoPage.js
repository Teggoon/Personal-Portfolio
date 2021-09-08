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

    const leftPageButtonState = pageNumber > minPageNUmber ? "active" : "muted";
    const rightPageButtonState = pageNumber < maxPageNumber ? "active" : "muted";
    return (  
        <div className="demo-page">
            <h1 className="demo-page-title">DocuMint Demo</h1>
                {pageNumber == 0 && <span className="demo-gif-explanation">1. First, login to the application using company credentials</span>}
                {pageNumber == 1 && <span className="demo-gif-explanation">2. Search for student documents by studentID.</span>}
                {pageNumber == 2 && <span className="demo-gif-explanation">3. Filter and sort results to find documents easily.</span>}
            <div className="flexbox-for-gif-and-arrow-buttons">
                <span className="demo-page-button-container" onClick={handleLeftButtonClick} state={leftPageButtonState}>
                    <span className="arrow-button arrow-left" state={leftPageButtonState}></span>
                </span>
                {pageNumber == 0 && <img className="demo-gif" src={DocuMintLogin}></img>}
                {pageNumber == 1 && <img className="demo-gif" src={DocuMintSearchAndView}></img>}
                {pageNumber == 2 && <img className="demo-gif" src={DocuMintFilterAndSort}></img>}
                
                <span className="demo-page-button-container" onClick={handleRightButtonClick} state={rightPageButtonState}>
                    <span className="arrow-button arrow-right" state={rightPageButtonState}></span>
                </span>
            </div>
        </div>
    );
}
 
export default DocuMintDemoPage;