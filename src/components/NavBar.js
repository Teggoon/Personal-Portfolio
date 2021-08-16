import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Link to="games">Games</Link>
            <Link to="music">Music</Link>
        </div>
    );
}
 
export default NavBar;