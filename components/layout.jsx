import React from 'react';
import Navbar from './navbar'
import Footer from './footer';


const layout = ({ children }) => {
	return (
		<div>
			<Navbar />	 
			{children}			
			<Footer />
		</div>
	)
}

export default layout