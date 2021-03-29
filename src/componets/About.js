import React from 'react';
import '../css/about.css';
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillFacebook,
	AiFillGithub,
} from 'react-icons/ai';

function About() {
	return (
		<>
			<div className="about-section" id="about">
				<div className="about-wrapper">
					<div className="about-img">
						<img src="img/about.jpg" />
					</div>
					<div className="about-header">
						<h1>
							I'M A DEVELOPER BASED IN KAMPALA WHO ENJOYS WORKING IN FRONT-END
							DEVELOPMENT BUT ALSO GETS A KICK OUT OF BACK-END DEVELOPMENT
						</h1>

						<h5>
							I’m naturally curious and enjoy figuring out how things work.
						</h5>
						<p>
							I'm very passionate and dedicated to my work and always open to
							learning new technologies and frameworks.
						</p>
						<p>
							{' '}
							I’ve built web applications using jQuery, Node.js and React and
							have a strong foundation in web design and development.
						</p>
						<p>
							{' '}
							I've recently completed the Outbox EDU mentorship programme, a 15
							week web development bootcamp aimed at helping upcoming developers
							to grow and currently also pursuing a bachelors in computer SCI.
						</p>
						<p>
							{' '}
							Before moving into web development, i built up a wide
							range of skills & qualities in IT Operations, Graphic Design, Accounting and as a Customer Service Representative.
						</p>
						<p>
							{' '}
							Eventual career goal is to be a Full-Stack Web Developer
							collaborating with other like-minded professionals to
							build the best website that meets needs of the end user


						</p>

						<div className="social-links">

							<a href='https://twitter.com/mambophil' target='_blank'><AiFillTwitterCircle className="twitter" /></a>
							<a href='https://www.facebook.com/' target='_blank'><AiFillFacebook className="facebook" /></a>
							<a href='https://www.linkedin.com/in/mambophill' target='_blank'><AiFillLinkedin className="linkedin" /></a>
							<a href='https://github.com/mambop' target='_blank'><AiFillGithub className="gi" /></a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
