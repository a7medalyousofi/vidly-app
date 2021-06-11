import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Vidly
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav mr-auto">
						<li>
							<NavLink className="nav-link" to="/movies">
								Movies
							</NavLink>
						</li>
						<li>
							<NavLink className="nav-link" to="/customers">
								Customers
							</NavLink>
						</li>
						<li>
							<NavLink className="nav-link" to="/rentals">
								Rentals
							</NavLink>
						</li>
					</ul>
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
					<NavLink className="nav-link" to="/register">
						Register
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
