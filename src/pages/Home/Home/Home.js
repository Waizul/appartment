import React from 'react';
import Apartments from '../Apartment/Apartments';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import AllReview from '../Review/AllReview';

const Home = () => {
	return (
		<div>
			<Header />
			<Apartments />
			<Featured />
			<AllReview />
		</div>
	);
};

export default Home;
