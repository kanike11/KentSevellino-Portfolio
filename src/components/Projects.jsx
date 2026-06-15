import { useState } from 'react';
import DonmacImage from '../assets/DonMac.png';
import Akasi from '../assets/AkasiClinic.png';

const projects = [
    {
        title: 'DonMacho',
        description: 'Developed a self-service kiosk application for DonMacho that allows customers to place food orders through an interactive digital interface.',
        tags: ['React', 'Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
        image: DonmacImage,
        projectLink: '#',
        demoLink: 'https://github.com/kanike11/DonMacho-Python.git',
    },
    {
        title: 'UMerch',
        description: 'A data-driven operations dashboard built for quick scanning, alerts, and task triage.',
        tags: ['Dashboard', 'Analytics', 'Productivity'],
        image: '',
        projectLink: '#',
        demoLink: '#',
    },
    {
        title: 'Akasi Clinic',
        description: 'A creative portfolio system with motion-first presentation and rich case-study layouts.',
        tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
        image: Akasi,
        projectLink: '#',
        demoLink: 'https://github.com/kanike11/AkasiClinic.git',
    },
];

function ProjectCard({ project }) {
    const [isInteractive, setIsInteractive] = useState(false);

    const handlePointerMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const buffer = 72;
        const isNear =
            event.clientX >= rect.left - buffer &&
            event.clientX <= rect.right + buffer &&
            event.clientY >= rect.top - buffer &&
            event.clientY <= rect.bottom + buffer;

        setIsInteractive(isNear);
    };

    const hasImage = Boolean(project.image);

    return (
        <article
            className={`project-card${isInteractive ? ' project-card--interactive' : ''}`}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerMove}
            onPointerLeave={() => setIsInteractive(false)}
        >
            <div className="project-card__visual">
                {hasImage ? (
                    <img className="project-card__image" src={project.image} alt={`${project.title} preview`} />
                ) : null
                }
            </div>

            <div className="project-card__body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="project-card__tags" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                        <span className="project-card__tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="project-card__actions" aria-label={`${project.title} links`}>
                    <a className="button button--ghost project-card__button" href={project.projectLink} target="_blank" rel="noreferrer">
                        Unavailable
                    </a>
                    <a className="button button--primary project-card__button" href={project.demoLink} target="_blank" rel="noreferrer">
                        View Project
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section className="section projects-section" id="projects">
            <div className="section__heading section__heading--center projects-section__heading">
                <p className="eyebrow">FEATURED PROJECTS</p>
                <h3>Projects</h3>
                <p className="section__subtitle projects-section__subtitle">
                    A small selection of work that balances clean structure, practical value, and a bit of visual character.
                </p>
            </div>

            <div className="projects-section__notice" role="note" aria-label="Project hosting notice">
                <span className="projects-section__notice-icon" aria-hidden="true">
                    !
                </span>
                <p>
                    Some deployed projects may experience bugs or downtime depending on hosting limits.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}