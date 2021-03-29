import React from 'react';


function ServicesCardItem(props) {
	return (
		<>
			<li className="service-card-li">
					<div className="service-img-wrapper">
						<img src={props.src} className="service-card-img" />
					</div>
				<div className="service-card-text">
					<h2>{props.h2}</h2>
					<p>{props.text}</p>
				</div>
			</li>
		</>
	);
}

export default ServicesCardItem;
