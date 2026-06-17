export default function Navbar() {
    return (
        <header className="navbar">
            <a className="brand" href="#home" aria-label="KENT home">
                <span className="brand__accent">KENT</span>
            </a>

            <nav className="navbar__nav" aria-label="Primary">
                <a className="navbar__link" href="#home">
                    Home
                </a>
                <a className="navbar__link" href="#about">
                    About
                </a>
                <a className="navbar__link" href="#skills">
                    Skills
                </a>
                <a className="navbar__link" href="#projects">
                    Projects
                </a>
                <a className="navbar__link" href="#certificates">
                    Certificates
                </a>
                <a className="navbar__link" href="#contact">
                    Contact
                </a>
            </nav>
        </header>
    );
}