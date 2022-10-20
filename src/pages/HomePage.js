import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
    return (
        <>
            <header className="header">

            <div className="introduction-part">
                <section className="text">
                    <div className="text-title">
                    <h4>Hi, I'm</h4>   
                    <h2>Kristina Peneva</h2>
                     
                        <h4>Junior Front-end Developer</h4>
                    </div>
                    <div class="tabs">
                        <Link to="/experience" className="intro-link">Experience</Link>
                    </div>
                    {/* <div class="tabs">
                        <Link to="/contact" className="intro-link">Contact</Link>
                    </div> */}
                </section>

            </div>

            </header>
            <section className="social">
                <a href="https://www.linkedin.com/in/kristina-krasteva-peneva/">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/kristina-krasteva-peneva/">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </section>

        </>
    );
}

export default HomePage;