import React from 'react';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Apartments from './Apartments';
import Featured from './Featured';
import Header from './Header';

const Home = () => {
	return (
		<div>
			<Header />
			<Apartments />
			<Featured />
			<Review />
			<Footer />
		</div>
	);
};

export default Home;
