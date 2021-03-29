import React, { useState } from 'react';
import '../css/testimonial.css';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
	const sliderData = [
		{
			img: '/img/mirriam.png',
			text_1: "Phillip is a very talented Developer,\
			but also a lot more than that - his ability to grasp things with a fresh pair of eyes is great, \
			and he has the seniority to project manage everything himself. Absolutely brilliant!",
			text_2: 'Mrs. Mirriam Akongo',
			text_3: 'Team Leader',
			text_4: 'Outbox EDU mentorship programme'
		},
		{
			img: '/img/denis.jpg',
			text_1: "Fantastic service and great guy.\
			We recommend to anyone who needs IT technical support services",

			text_2: 'Mr. Dennis Guweddeko',
			text_3: 'Director',
			text_4: 'Imperial Paints Uganda',
		},
		{
			img: '/img/phillip.png',
			text_1: "Without doubt one of the most talented IT personnel out there.\
					I always go back to Phillip when Im out of my depth and he's never failed to deliver what I ask for.\
					Smart, trustworthy and professional.\
					You won't be disappointed.",

			text_2: 'Mr. Philip Mudoko',
			text_3: 'Accountant',
			text_4: 'Imperial Paints Uganda',
		},
	];
	var settings = {
		autoplay: true,
		autoplaySpeed: 3500,
		infinite: true,

		dots: true,
		slidesToShow: 1,
		arrows: false,
	};
	return (
		<>
			<div className="testimonials-section" id="testimonial">
				<div className="testimonials-wrapper">
					<h1>Testimonials</h1>
					{/*slide show settup using react-slick Lib */}
					<Carousel {...settings}>
						{sliderData.map((data, index) => {
							return (
								<div key={index}>
									<div className="testimonials-img">
										<img src={data.img} />
									</div>
									<p>{data.text_1}</p>
									<h2>{data.text_2}</h2>
									<span>{data.text_3}</span>
									<span>{data.text_4}</span>
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>
		</>
	);
}

export default Testimonial;
