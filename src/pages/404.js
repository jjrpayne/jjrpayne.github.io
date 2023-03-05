import React from 'react'
import Layout from './components/Layout'
import Helmet from "react-helmet";

export default function NotFound() {
    return (
        <Layout>
        <Helmet>
			<title>Not Found - John Payne</title>
		</Helmet>
            
        <div class="parallax centred">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 bg-pastelgreen">
                        <h1><b>404</b></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 bg-white">
                        <p>The page you are looking for does not exist. Please check the URL!</p>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

