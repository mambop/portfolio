import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './componets/Nav';
import './css/app.css';
import Home from './componets/Home';
import Projects from './componets/Projects';
import Services from './componets/Services';
import About from './componets/About';
import Testimonial from './componets/Testimonial';
import Contact from './componets/Contact';
import Footer from './componets/Footer';

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="main-container">
					<Nav />
					<Home />
					<About />
					<Projects />
					<Services />
					<Testimonial />
					<Contact />
					<Footer />

				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
