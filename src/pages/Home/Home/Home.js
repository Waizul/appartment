import React from 'react';
import Navbar from '../../Shared/Navbar';
import Apartments from '../Apartment/Apartments';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
	return (
		<div>
			<Header />
			<Apartments />
			<Featured />
			<Review />
		</div>
	);
};

export default Home;
