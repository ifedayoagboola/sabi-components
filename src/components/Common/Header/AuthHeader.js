import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div>
		<ul>
			<li className="hover:text-red-500">
				<Link to="/dashboard">Go to Dashboard</Link>
			</li>
		</ul>
	</div>
);

export default Header;
