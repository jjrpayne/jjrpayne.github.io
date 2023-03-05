import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		<script
			key="https://code.jquery.com/jquery-3.6.0.min.js" 
			src="https://code.jquery.com/jquery-3.6.0.min.js" 
			integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" 
			crossOrigin="anonymous"
			defer
		/>,
		<script
			key="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
			src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
			integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
			crossOrigin="anonymous"
			defer
		/>,
		<script
			key="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
			src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
			crossOrigin="anonymous"
			defer
		/>
	])
}
