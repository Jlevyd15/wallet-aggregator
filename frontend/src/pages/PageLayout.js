import React from 'react'
import Navbar from '../components/Navbar'
import './PageLayout.css'

const PageLayout = ({ children }) => (
	<div className="page-layout-contianer">
		<Navbar />
		<div className="page-layout-main-window">
			{children}
		</div>
	</div>
)
	
export default PageLayout