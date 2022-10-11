import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="introduction-part">
                <section className="text">
                    <div className="text-title">
                        <h4>Hi, I'm</h4>
                        <h2>Kristina Peneva</h2>
                        <h4>Junior Front-end Developer.</h4>
                    </div>
                    <div class="tabs">
                        <Link to="/about" className="intro-link">Learn More</Link>
                    </div>
                </section>
                <section className="image">
                    <div className="profile_picture"></div>
                </section>

            </div>
        </>
    );
}

export default HomePage;