const ExperiencePage = () => {
    return (
        <>
            
            <h1>My Experience</h1>
            <section className="work-experience">
                <div className="work-experience-child">
                    <h3>Junior Developer</h3>
                    <p>April 2022 - October 2022</p>
                    <h5>Sollers Consulting Sp. z o.o., Poland</h5>
                    <div className="work-experience-child-description">
                        <p>Worked in a UK client's project as a front-end developer</p>
                        <p>Framework: React.js</p>
                        <p>Technology solution used: Guidewire PolicyCenter</p>
                        <p>Tools: Git, Jira, Bitbucket</p>
                        <p>The product development framework: Scrum</p>
                    </div>
                    <p>Certificates</p>
                </div>
                <div className="work-experience-child">
                    <h3>Trainee - Automated Testing Online Program</h3>
                    <p>November 2021 - March 2022</p>
                    <h5>EPAM Systems, Poland</h5>
                    <div className="work-experience-child-description">
                        <p>The program covered: the basics of Java programming language</p>
                        <p>Test automation tools: Selenium, Cucumber</p>
                        <p>Basic knowledge of software testing life cycle, documentation, testing types and techniques</p>
                    </div>
                    <a href="https://www.linkedin.com/in/kristina-krasteva-peneva/overlay/1635493019730/single-media-viewer/">Certificate</a>
                </div>
            </section>
            <section className="education">
                <h3>Bachelor of Architecture</h3>
                <p>September 2014 - August 2018</p>
                <h5>Institute of Technology Sepuluh Nopember</h5>
                <p>Surabaya, Indonesia</p>
                <p>KNB Scholarship Fellow</p>
            </section>
            <section className="education">
                <h3>Languages</h3>
                <p>Bulgarian (native)</p>
                <p>English (advanced)</p>
                <p>Indonesian (advanced)</p>
                <p>Polish (beginner - A1.3)</p>
            </section>
            <section className="full-resume">
                <button>Full Resume</button>
            </section>
        </>
    );
}

export default ExperiencePage;