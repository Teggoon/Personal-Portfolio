import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo-transparent-background.png"

const LinkWrapper = ({path, name}) => {
    const currentPath = useLocation().pathname;
    const componentClassName = "nav-link" + (currentPath === path ? " nav-link-active" : "");
    return <Link to={path} className={componentClassName}>{name}</Link>
}

const NavBar = () => {
    return ( 
        <div className="navbar-container ">
            <span className="website-top-left-title">Portfolio</span>
            <img className="logo" src={logo} onClick={() => {window.location.href = "/"}}/>
            <div className="navbar-flex-container">
                <LinkWrapper path="/" name="Home" />
                <LinkWrapper path="/projects" name="Projects" />
                <LinkWrapper path="/contact" name="Contact" />
                {/* <LinkWrapper path="/games" name="Games" /> */}
                {/* <LinkWrapper path="/music" name="Music" /> */}
            </div>
        </div>
    );
}
 
export default NavBar;