import { useState } from "react";
import SDUHelperLogin from "../gif/SDUHelperLogin.gif";
import SDUHelperQueryInput from "../gif/SDUHelperQueryInput.gif";
import SDUHelperFileSelection from "../gif/SDUHelperFileSelection.gif";

const minPageNUmber = 0;
const maxPageNumber = 2;

const SDUHelperDemoPage = () => {
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
            <h1 className="demo-page-title">SDU Helper Demo</h1>
                {pageNumber == 0 && <span className="demo-gif-explanation">1. First, connect to the company database</span>}
                {pageNumber == 1 && <span className="demo-gif-explanation">2. Choose 1 of 2 ways to enter a SQL query and retrieve data.</span>}
                {pageNumber == 2 && <span className="demo-gif-explanation">3. Generate XML config files based on the user's selection.</span>}
            <div className="flexbox-for-gif-and-arrow-buttons">
                <span className="demo-page-button-container" onClick={handleLeftButtonClick} state={leftPageButtonState}>
                    <span className="arrow-button arrow-left" state={leftPageButtonState}></span>
                </span>
                {pageNumber == 0 && <img className="demo-gif" src={SDUHelperLogin}></img>}
                {pageNumber == 1 && <img className="demo-gif" src={SDUHelperQueryInput}></img>}
                {pageNumber == 2 && <img className="demo-gif" src={SDUHelperFileSelection}></img>}
                
                <span className="demo-page-button-container" onClick={handleRightButtonClick} state={rightPageButtonState} shine={pageNumber == minPageNUmber ? "true" : "false"}>
                    <span className="arrow-button arrow-right" state={rightPageButtonState}></span>
                </span>
            </div>
        </div>
    );
}
 
export default SDUHelperDemoPage;