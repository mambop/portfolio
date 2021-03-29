import React from 'react';
import '../css/contact.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
	
	//custom alert setup using react react-toastify Lib
	toast.configure();
	const notify = () => {
		toast.success('Message has been submitted', {
			position: toast.POSITION.TOP_CENTER,
			autoClose: 1000,
		});
	};

	// sending email using EmailJS Lib
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			'gmail',
			'profile_template',
			e.target,
			'user_IsLKIcBX6nDvjUjkkNjx4'
		);
		e.target.reset();
	};
	return (
		<>
			<div className="contact-section" id="contact">
				<div className="contact-wrapper">
					<h1>Get In Touch</h1>
					<ul className="contacts">
						<li>
							<p>Phone</p>
							<span>+256 774380935</span>
						</li>

						<li>
							<p>Email</p>
							<span>pbiscolt@gmail.com</span>
						</li>
					</ul>

					<form className="form" onSubmit={sendEmail}>
						<ul>
							<li>
								<input type="text" placeholder="Name" name="name" required />
							</li>
							<li>
								<input type="email" placeholder="Email" name="email" required />
							</li>
							<li>
								<textarea
									cols="30"
									rows="9"
									placeholder="Tell Me About Query"
									name="message"
									required
								></textarea>
							</li>
							<li>
								<input type="submit" value="SEND" onClick={notify} />
							</li>
						</ul>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
