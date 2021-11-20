import React from 'react';
import Apartment from './Apartment';
import useWindowPosition from '../../hook/useWindowPosition';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useApartment from '../../../hook/useApartment';
import { Box } from '@mui/system';

const Apartments = () => {
	const checked = useWindowPosition('header');
	const apartments = useApartment(6);

	return (
		<div>
			<Container>
				<Typography
					sx={{
						fontSize: '2.1rem',
						mt: 7,
						textAlign: 'center',
						fontFamily: 'roboto',
					}}
				>
					Browse Apartments
				</Typography>
				<Box
					sx={{
						width: '140px',
						borderTop: '3px solid orange',
						mt: 2,
						mx: 'auto',
					}}
				></Box>
				<Typography
					sx={{
						fontSize: '1rem',
						textAlign: 'center',
						pt: 3,
						pb: 5,
						fontFamily: 'roboto',
					}}
				>
					Each apartments has been individually designed to maximise
					space and light. Smart Home Technology installed as standard
					in each apartment putting you in total control of your home
					at the touch of a button from wherever you might be.
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{apartments.map((apartment) => (
						<Apartment
							key={apartment.name}
							apartment={apartment}
							checked={checked}
						></Apartment>
					))}
				</Grid>
				<Typography sx={{ textAlign: 'center', mt: 5 }}>
					<Link to='explore' style={{ textDecoration: 'none' }}>
						<Button
							sx={{
								fontSize: '1rem',
								background: 'rgba(2,20,12,0.9)',
							}}
							variant='contained'
						>
							Browse All Apartments
						</Button>
					</Link>
				</Typography>
			</Container>
		</div>
	);
};

export default Apartments;
