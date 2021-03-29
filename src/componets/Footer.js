import React from 'react';
import '../css/footer.css';
import { ImArrowUp } from 'react-icons/im';
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillFacebook,
	AiFillGithub,
} from 'react-icons/ai';
import {animateScroll } from 'react-scroll';
function Footer() {
	return (
		<>
			<div className="footer-section">
				<div className="ScrollUp" 
				to='/'
				onClick={() => animateScroll.scrollToTop()}>
					<ImArrowUp className="arrow" />
				</div>
				<div className="footer-icons">
				<a href='https://twitter.com/mambophil' target='_blank'><AiFillTwitterCircle className="tw" /></a>
				<a href='https://www.facebook.com/' target='_blank'><AiFillFacebook className="fb" /></a>
				<a href='https://www.linkedin.com/in/mambophill' target='_blank'><AiFillLinkedin className="li" /></a>
				<a href='https://github.com/mambop' target='_blank'><AiFillGithub className="gi" /></a>
				</div>

				<p>
					&#169; 2021 All RIghts Reserved | Created By <span>Phillip Mambo</span>
				</p>
			</div>
		</>
	);
}

export default Footer;
