import React from 'react';


function ProjectsCardItem(props) {
	return (
		<>
			<li className="project-card-li">
				<a className="project-card-link" href={props.path} target="_blank">
					<div className="project-img-wrapper">
						<img src={props.src} className="project-card-img" />
					</div>
				</a>
				<div className="project-card-text">
					<h5>{props.text}</h5>
					<p>{props.para}</p>
					<p>{props.para2}</p>
					<a target="_blank" href={props.url}>GitHub Link</a>
				</div>
			</li>
		</>
	);
}

export default ProjectsCardItem;
