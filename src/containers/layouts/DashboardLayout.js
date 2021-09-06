import React from "react";
import Header from '../../components/Common/Header/DashboardHeader'


const DashboardLayout = ({ children }) => (
	<div>
		<Header />
		<h1>Admin Dashboard Layout</h1>
		{children}
	</div>
);

export default DashboardLayout;
