import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default NavBar;