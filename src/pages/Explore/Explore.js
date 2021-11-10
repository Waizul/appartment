import { Collapse } from '@mui/material';
import React, { useEffect } from 'react';
import ExploreApartments from './ExploreApartments';
import Navbar from '../Shared/Navbar';
const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	minHeight: '90vh',
	// backgroundImage: `url(${apartmentBg})`,
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover',
	paddingTop: 40,
	background: 'black',
};
const Explore = () => {
	return (
		<div>
			<Navbar />
			<div style={style}>
				<ExploreApartments />
				<ExploreApartments />
				<ExploreApartments />
				<ExploreApartments />
				<ExploreApartments />
				<ExploreApartments />
			</div>
		</div>
	);
};

export default Explore;
