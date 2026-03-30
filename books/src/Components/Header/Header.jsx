import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
	return (
		<div className="holder">
			<header className="header">
				<Navbar />
				<div className="header-content flex flex-column text-center text-white">
					<h2 className="header-title text-capitalize">
						Find the book of your choice!
					</h2><br />
					<p className="header-text fs-18-fw-3">
						Discover a world of stories at your fingertips.
						Our book website brings together a wide collection of novels,
						academic texts, and bestsellers - making it easy to explore,
						read, and find your next favorite book anytime, anywhere.</p>
					<SearchForm />
				</div>
			</header>
		</div>
	);
};

export default Header;
