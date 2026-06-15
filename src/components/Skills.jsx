import {
    SiDjango,
    SiGithub,
    SiHtml5,
    SiLaravel,
    SiMysql,
    SiPhp,
    SiPython,
    SiGit,
} from 'react-icons/si';
import { FaJava, FaServer } from 'react-icons/fa';
import { TbBrandCss3, TbBrandVscode } from 'react-icons/tb';
import { Sparkles } from 'lucide-react';

const skillGroups = [
    {
        title: 'Programming Languages',
        icon: '⌨',
        skills: [
            { name: 'Python', Icon: SiPython, image: '' },
            { name: 'Java', Icon: FaJava, image: '' },
            { name: 'HTML', Icon: SiHtml5, image: '' },
            { name: 'CSS', Icon: TbBrandCss3, image: '' },
            { name: 'SQL', Icon: FaServer, image: '' },
            { name: 'PHP', Icon: SiPhp, image: '' },
        ],
    },
    {
        title: 'Tools & AI',
        icon: '🛠',
        skills: [
            { name: 'GitHub', Icon: SiGithub, image: '' },
            { name: 'VS Code', Icon: TbBrandVscode, image: '' },
            { name: 'Laragon', Icon: FaServer, image: '' },
            { name: 'Git', Icon: SiGit, image: '' },
            { name: 'Claude', Icon: Sparkles, image: '' },
        ],
    },

    {
        title: 'Databases',
        icon: '🗄',
        skills: [{ name: 'MySQL', Icon: SiMysql, image: '' }],
    },
    {
        title: 'Frameworks',
        icon: '🧩',
        skills: [
            { name: 'Django', Icon: SiDjango, image: '' },
            { name: 'Laravel', Icon: SiLaravel, image: '' },
        ],
    },
];

export default function Skills() {
    return (
        <section className="section skills-section" id="skills">
            <div className="section__heading section__heading--center skills__heading">
                <p className="eyebrow">TECHNICAL SKILLS</p>
                <h3>Skills Portfolio</h3>
                <p className="section__subtitle">My technical arsenal for building modern web applications</p>
            </div>

            <div className="skills-stack">
                {skillGroups.map((group) => (
                    <article className="skills-card" key={group.title}>
                        <div className="skills-card__header">
                            <span className="skills-card__icon" aria-hidden="true">
                                {group.icon}
                            </span>
                            <h4>{group.title}</h4>
                        </div>

                        <div className="skills-card__rule" aria-hidden="true" />

                        <div className="skills-grid">
                            {group.skills.map((skill) => (
                                <div className="skills-tile" key={skill.name}>
                                    <span className="skills-tile__badge" aria-hidden="true">
                                        {skill.image ? (
                                            <img className="skills-tile__image" src={skill.image} alt="" />
                                        ) : (
                                            <skill.Icon className="skills-tile__icon" />
                                        )}
                                    </span>
                                    <span className="skills-tile__label">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}