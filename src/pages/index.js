import React from "react";
import Layout from "./components/Layout";
import Helmet from "react-helmet";

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
									<img className="img-responsive lazy" loading="lazy" width="90%" src="https://res.cloudinary.com/di2iadfzv/image/upload/v1677881036/me_3_pabr2a.jpg"/>
								</div>
							</div>
						</div>
					</div>
					<div className="index-section" id="projects">
						<div className="container">
							<div className="row padded-row">
								projects: this section is under construction
							</div>
						</div>
					</div>
					<div className="index-section" id="experience">
						<div className="container">
							<div className="row">
								experience: this section is under construction
							</div>
						</div>
					</div>
					<div className="index-section contact-section" id="contact">
						<div className="container">
							<div className="row">
								contact me :this section is under construction
							</div>
						</div>
					</div> 
				</section>
			</div>

		</Layout>
	)
 
}
