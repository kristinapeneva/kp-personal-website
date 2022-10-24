import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from './Kristina_Peneva_CV.pdf'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
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
                            <h4 className="subtitle">Junior Front-end Developer</h4>
                        </div>
                        <div>
                            <a className="intro-link" href={cv} download><FontAwesomeIcon icon={faDownload} /> Resume</a>
                        </div>
                    </section>
                 </div>
            </header>
            <footer className="social">
                <a href="https://www.linkedin.com/in/kristina-krasteva-peneva/">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://github.com/kristinapeneva">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </footer>
        </>
    );
}

export default HomePage;