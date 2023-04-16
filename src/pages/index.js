import React from "react";
import Layout from "./components/Layout";
import Helmet from "react-helmet";
import { Link } from 'gatsby'


export default function Home() {

	
	return (
		<Layout>
			<Helmet>
				<title>John Payne</title>
			</Helmet>	

			<div className="parallax">
				<section className="py-5">
					<div className="index-section" id="about">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="card-jj bg-pastelblue">
										<h1><b>About Me</b></h1>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="card-jj bg-white">
										<p>Hello! My name is John Payne.</p>
										<p>I graduated from UVic's computer science program in 2021 and since then I've worked as a full-stack developer on web and mobile projects.</p>
										<p>Outside of work, some of my hobbies include riding my bike, going on nature walks, and playing the guitar and piano.</p>
										<p>To read more about my work experience and some of my favourite personal projects, feel free to keep scrolling!</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="card-image">
										<img className="img-responsive lazy" loading="lazy" width="100%" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1677881036/me_3_pabr2a.jpg" alt="John Payne"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="index-section" id="projects">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="card-jj bg-pastelgreen">
										<h1><b>Selected Projects</b></h1>
									</div>
								</div>
							</div>
							<div className="row top-bottom-padding">
								<div className="col-md-6">
									<div className="card-jj bg-white">
										<h2 className="text-jjgreen"><b>Hatchways Projects</b></h2>
										<p>This is a selection of projects I completed for the company Hatchways.</p>
										<h3 className="text-jjgreen">Hackathon</h3>
										<p>Implemented new endpoints and SQL queries in a Javascript API as part of my submission to their March 2023 hackathon.</p>
										<h3 className="text-jjgreen">Assessments</h3>
										<p>These are assessments I performed in order to test them for the company.</p>
										<p>• Ruby on Rails Assessment, January 2023</p>
										<p>• Formula Interpreter Exercises, Python, November 2022</p>
										<p>All of the projects I've done for Hatchways are on private repositories, please <Link class="scroll-link" to="/#contact">contact me</Link> to learn more.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="card-image">
										<img className="img-responsive lazy" loading="lazy" width="100%" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1679883315/stock_warning_screenshot_wodv4u.png" alt="output of endpoint implemened for hatchways hackathon"/>
									</div>
								</div>
							</div>
							<div className="row top-bottom-padding">
								<div className="col-md-6">
									<div className="card-image">
										<img className="img-responsive lazy" width="100%" loading="lazy" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1681666422/random-episode-picker-screenshot_ss4he5.png" alt="Screenshot of Random Episode Picker App"/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="card-jj bg-white">
										<h2 className="text-jjgreen"><b>Random Episode Picker</b></h2>
										<p>Web application for selecting a random episode of a given TV show. Developed with a React Frontend and a NodeJS pass-through service for the OMDb API.</p>
										<p>Links: <a href="https://github.com/jjrpayne/random-episode-picker" target="_blank" rel="noreferrer">GitHub</a>, <a href= "https://random-episode-picker.netlify.app/"target="_blank" rel="noreferrer">Web App</a></p>
									</div>
								</div>
							</div>
							<div className="row top-bottom-padding">
								<div className="col-md-6">
									<div className="card-jj bg-white">
										<h2 className="text-jjgreen"><b>Space Dash</b></h2>
										<p>A cross-platform game developed using Java and the libGDX framework.</p>
										<p>Links: <a href="https://github.com/jjrpayne/spacedash" target="_blank" rel="noreferrer">GitHub</a>, <a href= "https://spacedash.netlify.app/"target="_blank" rel="noreferrer">Web App</a>, <a href= "https://play.google.com/store/apps/details?id=com.gamehut.spacedash"target="_blank" rel="noreferrer">Google Play</a></p>									
									</div>
								</div>
								<div className="col-md-6">
									<div className="card-image">
										<img className="img-responsive lazy" loading="lazy" width="100%" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1679263668/spacedash-screenshot_ke4eu7.png" alt="screenshot of Space Dash game"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="index-section" id="experience">
						<div className="container">
							<div className="row top-bottom-padding">
								<div className="col-md-12">
									<div className="card-jj bg-pastelred">
										<h1><b>Work Experience</b></h1>
									</div>
								</div>
							</div>
							<div className="row top-bottom-padding">
								<div className="col-md-6">
									<div className="card-jj bg-white">
										<h2 className="text-jjred"><b>AOT Technologies</b></h2>
										<b>Full-Stack Developer</b>
										<ul>
											<li>Actively participated in design and development of full-stack applications(frontend and backend)</li>
											<li>Performed requirements analysis, unit testing, software integration, and support</li>
											<li>Designed and coded relational database objects and integrated with web applications</li>
											<li>Built code modules, unit tests and deployed to test environments</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="card-jj bg-white">
										<h2 className="text-jjred"><b>Salyx Medical / Ergonomyx Technologies</b></h2>
										<b>Full-Stack Developer</b> (started as co-op student, later promoted to full-time employee)
										<ul>
											<li>Developed a full-stack web application, creating software that monitors vital health information</li>
											<li>Created a promotional website for the company (visit <a href="https://salyxmedical.com" target="_blank" rel="noreferrer">salyxmedical.com</a>)</li>
											<li>Created and maintaned database, serving the full-stack web application</li>
											<li>Led new co-op students, introducing them to software architecture and helping them collaborate on company projects</li>
											<li>Languages and tools used: NodeJS, ExpressJS, Python, Flask, PostgreSQL, Git</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="index-section contact-section" id="contact">
						<div className="container">
							<div className="row top-bottom-padding">
								<div className="col-md-12">
									<div className="card-jj bg-pastelpurple">
										<h1><b>Contact Me</b></h1>
									</div>
								</div>
							</div>
							<div className="row top-bottom-padding">
								<div className="col-md-12">
									<div className="card-jj bg-white">
										<p>Please contact me if you have any questions.</p>
										<ul>
											<li>Email: <a href="mailto:jjrpayne@hotmail.com">jjrpayne@hotmail.com</a></li>
											<li>Links: <a href="https://github.com/jjrpayne" target="_blank" rel="noreferrer">GitHub</a>, <a href="https://linkedin.com/in/jjrpayne" target="_blank" rel="noreferrer">LinkedIn</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div> 
				</section>
			</div>

		</Layout>
	)
 
}
