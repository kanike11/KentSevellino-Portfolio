import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Stars from './Stars';
import RocketField from './RocketField';
import ShootingStar from './ShootingStar';
import Planet from './Planet';
import SolarSystem from './SolarSystem';
import profileImage from '../assets/profile_picture.png';

export default function Hero() {
    useEffect(() => {
        const handleMove = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;

            document.documentElement.style.setProperty('--mouse-x', `${x * 20}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y * 20}px`);
        };

        window.addEventListener('mousemove', handleMove);

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero__galaxy" aria-hidden="true" />
            <div className="star-glow" aria-hidden="true" />
            <Stars />
            <RocketField />
            <ShootingStar />
            <SolarSystem />

            <div className="hero__content">
                <motion.div
                    className="hero__copy"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >

                    <h1>KENT LEONEL SEVELLINO</h1>
                    <div className="hero__roles" aria-label="ASPIRING BACKEND DEVELOPER and QUALITY ASSURANCE PROFESSIONAL">
                        <h2 className="hero__role hero__role--one" style={{ '--chars': 26 }}>
                            ASPIRING BACKEND DEVELOPER
                        </h2>
                        <h2 className="hero__role hero__role--two" style={{ '--chars': 27 }}>
                            QUALITY ASSURANCE
                        </h2>
                    </div>
                    <p className="hero__lede">I am a Computer Science Student & Aspiring Backend Developer and
                        Quality Assurance dedicated to building reliable systems,
                        ensuring software quality, and continuously learning new technologies to create meaningful digital experiences.</p>

                    <div className="hero__actions">
                        <a className="button button--primary" href="#projects">
                            My Projects
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
                >
                    <Planet />
                    <div className="hero__portrait">
                        <img src={profileImage} alt="KENT portrait" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}