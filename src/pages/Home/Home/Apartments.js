import React from 'react';
import Apartment from './Apartment';
import apartmentBg from '../../../images/banner/banner1.jpg';
import useWindowPosition from './useWindowPosition';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
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

const Apartments = () => {
	const checked = useWindowPosition('header');
	return (
		<div>
			<Typography
				sx={{
					color: 'white',
					fontSize: '2rem',
					textAlign: 'center',
					background: 'black',
					pt: 5,
				}}
			>
				Browse Apartments
			</Typography>
			<Typography
				sx={{
					color: 'white',
					fontSize: '0.5rem',
					textAlign: 'center',
					background: 'black',
					pt: 5,
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
				quas expedita, sapiente praesentium quaerat repellat commodi
				totam velit porro modi!
			</Typography>
			<div style={style}>
				<Apartment checked={checked} />
				<Apartment checked={checked} />
				<Apartment checked={checked} />
				<Apartment checked={checked} />
				<Apartment checked={checked} />
				<Apartment checked={checked} />
			</div>
			<Typography
				sx={{
					color: 'white',
					fontSize: '2rem',
					textAlign: 'center',
					background: 'black',
					pt: 5,
				}}
			>
				<Link to='explore' style={{ textAlign: 'center' }}>
					<Button
						sx={{
							color: 'white',
							fontSize: '1.3rem',
							textAlign: 'center',
							background: 'black',
							pt: 2,
						}}
					>
						Browse All Apartments
					</Button>
				</Link>
			</Typography>
		</div>
	);
};

export default Apartments;
