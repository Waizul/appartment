import { Collapse } from '@mui/material';
import React, { useEffect } from 'react';
import ExploreApartments from './ExploreApartments';
import Navbar from '../Shared/Navbar';
import useApartment from '../../hook/useApartment';
import { Box } from '@mui/system';
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
	const apartments = useApartment(10);
	return (
		<div>
			<Box sx={{ background: 'rgba(0,0,100,1)' }}>
				{' '}
				<Navbar />
			</Box>

			<div style={style}>
				{apartments.map((apartment) => (
					<ExploreApartments
						apartment={apartment}
						key={apartment.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Explore;
