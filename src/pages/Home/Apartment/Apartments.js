import React from 'react';
import Apartment from './Apartment';
import useWindowPosition from '../../hook/useWindowPosition';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useApartment from '../../../hook/useApartment';

const Apartments = () => {
	const checked = useWindowPosition('header');
	const apartments = useApartment(6);
	return (
		<div>
			<Container>
				<Typography
					sx={{
						fontSize: '2rem',
						textAlign: 'center',
						pt: 5,
					}}
				>
					Browse Apartments
				</Typography>
				<Typography
					sx={{
						fontSize: '1rem',
						textAlign: 'center',
						pt: 5,
						pb: 5,
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
								fontSize: '1.3rem',
								color: 'white',

								textAlign: 'center',
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
