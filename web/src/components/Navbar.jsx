import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/proposal', label: 'Proposal' },
        { path: '/thesis', label: 'Thesis' },
        { path: '/annotated-bib', label: 'Annotated Bib' },
        { path: '/data-analysis', label: 'Data Analysis' },
        { path: '/reflection', label: 'Reflection' },
        { path: '/thank-yous', label: 'Thank Yous' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <NavLink to="/" className="navbar-brand">
                    Calder Russell
                </NavLink>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path} className="navbar-item">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
