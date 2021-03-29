import React, { useState } from 'react';
import '../css/navbar.css';
import { Link, animateScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import '../css/navbar.css';

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link
						to="/"
						className="logo"
						//auto scroll to top page
						onClick={() => animateScroll.scrollToTop()}>
						<img src='img/logo.png' className='logo' />
					</Link>

					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="nav-links"
								onClick={closeMobileMenu}
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="projects"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="services"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="testimonial"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Testimonial
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Nav;
