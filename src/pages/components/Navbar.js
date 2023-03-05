import React from 'react'
import '../styles/main.css'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
    
        
    <nav class="navbar navbar-expand-lg navbar-light navbar-white bg-white fixed-top">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        
       
		<div class="container">
			<Link class="navbar-brand nav-link" to="/">
				John Payne
			</Link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<Link class="nav-link scroll-link" to="/#about">About
						</Link>
					</li>
					<li class="nav-item active">
						<Link class="nav-link scroll-link" to="/#projects">Selected Projects
						</Link>
					</li>
					<li class="nav-item active">
						<Link class="nav-link scroll-link" to="/#experience">Work Experience
						</Link>
					</li>
					<li class="nav-item active">
						<Link class="nav-link scroll-link" to="/#contact">Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>

    )
}
