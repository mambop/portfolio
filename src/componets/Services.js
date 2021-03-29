import React from 'react';
import ServicesCardItem from './ServicesCardItem';
import '../css/services.css';

function Services() {
	return (
		<>
			<div className="service-section" id="services">

				<div className="service-wrapper">
					<div className="service-header">
						<h1>Services</h1>
					</div>
					<ul className="service-card-ul">
						<ServicesCardItem
							src="/img/developer.png"
							h2='Web Developer'
							text="
							Get your message to the world with a creative & mobile reponsive web site"
							path="/works"
						/>
						<ServicesCardItem
							src="/img/graphics.png"
							h2='Graphics'
							text="Exceptional Graphic Designs that you can’t ignore."
							path="/works"
						/>

						<ServicesCardItem
							src="/img/IT.jpg"
							h2='IT Operations'
							text="Experience improvements in productivity and profitability by choosing to 
							Undergo the digital transformation and adapt to the current IT trends."
						/>
						<ServicesCardItem
							src="/img/camera.jpg"
							h2='Surveillance  Systems'
							text="Monitor the workplace or your home from your phone all over the world "
							path="/works"
						/>
						<ServicesCardItem
							src="/img/accounting.jpg"
							h2='Tally.ERP9 Accounting Software'
							text="Invest in a business managment system that'll free up your time & prevent costly mistakes."
							path="/works"
						/>
						<ServicesCardItem
							src="/img/furniture.jpg"
							h2='Custom Funiture'
							text="Got a Dream Funiture In Mind? We Will Make It For You"
							path="/works"
						/>


					</ul>
				</div>
			</div>
		</>
	);
}

export default Services;
