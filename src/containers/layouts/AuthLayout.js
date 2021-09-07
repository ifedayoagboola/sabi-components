import React from "react";
import Header from '../../components/Common/Header/AuthHeader'

const AuthLayout = ({ children }) => (
		<div>
			<Header />
			{children}
		</div>
	);

export default AuthLayout
