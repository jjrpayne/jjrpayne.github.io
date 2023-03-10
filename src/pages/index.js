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
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-12 bg-pastelblue">
											<h1><b>About Me</b></h1>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<br />
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 bg-white">
											<p>Hello! My name is John Payne.</p>
											<p>I graduated from UVic's computer science program in 2021 and since then I've worked as a full-stack developer on web and mobile projects.</p>
											<p>Outside of work, some of my hobbies include riding my bike, going on nature walks, and playing the guitar and piano.</p>
											<p>To read more about my work experience and some of my favourite personal projects, feel free to keep scrolling!</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<img className="img-responsive lazy" loading="lazy" width="90%" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1677881036/me_3_pabr2a.jpg" alt="photo of John Payne"/>
								</div>
							</div>
						</div>
					</div>
					<div className="index-section" id="projects">
						<div className="container">
							<div className="row">
								<div className="col-md-12 bg-pastelgreen">
									<h1><b>Selected Projects</b></h1>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<br />
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 bg-white">
									<p>These are some of my favourite personal projects that I've worked on.</p>
								</div>
							</div>
							<div className="row top-bottom-padding">
								<div className="col-md-5 bg-white">
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
								<div className="col-md-6 offset-1">
									<div className="row">
										<div className="col-md-12 bg-white">
											<h2 className="text-jjgreen"><b>Random Episode Picker</b></h2>
											<p>Web application for selecting a random episode of a given TV show. Developed with a React Frontend and a NodeJS pass-through service for the OMDb API.</p>
											<p>Links: <a href="https://github.com/jjrpayne/random-episode-picker" target="_blank">GitHub</a>, <a href= "https://random-episode-picker.netlify.app/"target="_blank">Web App</a></p>
										</div>
									</div>
									<div className="row top-bottom-padding">
										<div className="col-md-12">
											<img className="img-responsive lazy image-fullwidth" width="100%" loading="lazy" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1678490653/Screenshot_from_2023-03-10_15-21-03_efbotb.png" alt="Screenshot of Random Episode Picker App"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="index-section" id="experience">
						<div className="container">
							<div className="row top-bottom-padding">
								experience: this section is under construction
							</div>
						</div>
					</div>
					<div className="index-section contact-section" id="contact">
						<div className="container">
							<div className="row top-bottom-padding">
								contact me :this section is under construction
							</div>
						</div>
					</div> 
				</section>
			</div>

		</Layout>
	)
 
}
