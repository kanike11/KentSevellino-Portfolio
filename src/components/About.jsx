export default function About() {
    return (
        <section className="section section--about" id="about">
            <div className="section__heading section__heading--center">
                <p className="eyebrow">ABOUT ME</p>
                <h3>About Me</h3>
                <p className="section__subtitle">Get to know the developer behind the code</p>
            </div>

            <div className="panel panel--about">
                <div className="about-copy">
                    <p className="about-intro">
                        Hi there! Im <span>Kent Leonel Sevellino</span> 👋
                    </p>

                    <p>
                        Im a <span>computer science student</span> who enjoys building clean, user-focused digital
                        experiences. My journey in software development started with curiosity about how apps and websites work,
                        and it has grown into a commitment to creating efficient, meaningful solutions.
                    </p>

                    <p>
                        I like working on projects that balance good structure, smooth interactions, and practical value.
                        Whether Im exploring frontend ideas, backend logic, or new tools that help me learn faster,
                        I aim to keep improving one project at a time.
                    </p>
                </div>
            </div>

            <div className="about-stats">
                <div className="card about-stat-card">
                    <p className="about-stat-card__value">3rd</p>
                    <p className="about-stat-card__label">Year Student</p>
                </div>

                <div className="card about-stat-card">
                    <p className="about-stat-card__value">2+</p>
                    <p className="about-stat-card__label">Years Experience</p>
                </div>

                <div className="card about-stat-card">
                    <p className="about-stat-card__value">3+</p>
                    <p className="about-stat-card__label">Projects Completed</p>
                </div>

                <div className="card about-stat-card">
                    <p className="about-stat-card__value">5+</p>
                    <p className="about-stat-card__label">Technologies</p>
                </div>
            </div>
        </section>
    );
}