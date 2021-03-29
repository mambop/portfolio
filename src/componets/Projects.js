import React from 'react';
import ProjectsCardItem from './ProjectsCardItem';
import '../css/projects.css';

function Projects() {
	return (
		<>
			<div className="project-section" id="projects">
				<div className="poject-wrapper">
					<div className="project-header">
						<h1>Recent Projects</h1>
					</div>
					<ul className="project-card-ul">
						<ProjectsCardItem
							path="https://mambophillip.netlify.app"
							url="https://github.com/mambop/hawktek"
							src="/img/portfolio.png"
							text="Portfolio"
							para="I Designed and developed my portfolio using the React framework"
							para2="It includes some React libraries such as react-slick for slide show setup, EmailJS Lib for sending Email messages directly to my Gmail account "
						/>

						<ProjectsCardItem
							path="https://team-bmw.netlify.app"
							url="https://github.com/mambop/edu_core3_stackoverflow"
							src="/img/EDU.png"
							text="Outbox EDU Comment & Post Platform "
							para="Designed and developed using Node.js, React and MongoDB as backend database"
							para2="This was a group project that marked the end of the Web Development Bootcamp,
							I still continue to refine the website after I completed the course"
						/>

						<ProjectsCardItem
							path="https://campusmedia.netlify.app"
							url="https://github.com/mambop/campus_media"
							src="/img/campus_media.png"
							text="Campus Media"
							para="Campus Media was an End-Of-Semester Final Project i designed during my college studies"
							para2="It was developed as a static webpage using HTML & CSS to act as a communication channel for the university"
						/>

						<ProjectsCardItem
							path="https://meeting-agenda.netlify.app"
							url="https://github.com/mambop/edu_todo_app"
							src="/img/todo.png"
							text="Todo App"
							para="For my major assignment in the Front-End Web Development course I designed and developed a todo app using HTML, CSS and Javascript "

						/>
						<ProjectsCardItem
							path="https://orcauganda.netlify.app/"
							url="https://github.com/mambop/orcaweb"
							src="/img/orca.jpg"
							text="Orca Furniture"
							para="As a self taught Developer, this was my first web app designed and developed for the company i work in using Jquery, HTML, CSS and Javascript"
							para2="Eventual goal is to rebuild into a fully reponsive web app using the REACT framwork"

						/>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Projects;
