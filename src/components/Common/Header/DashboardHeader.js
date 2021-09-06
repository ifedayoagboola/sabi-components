import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<div>
		<ul className="flex ">
			<li className="hover:text-red-500">
				<Link to="/dashboard">Home</Link>
			</li>
			<li className="ml-4 hover:text-red-500">
				<Link to="/settings">Setting</Link>
			</li>
			<li className="ml-4 hover:text-red-500">
				<Link to="/">Logout</Link>
			</li>
		</ul>
	</div>
);

export default Header;
