import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Collapse,
	Typography,
} from '@mui/material';
import React from 'react';
import apartmentBg from '../../../images/banner/banner1.jpg';
const style = {
	size: {},
};
const Apartment = ({ checked }) => {
	return (
		<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
			<Card
				sx={{
					maxWidth: 600,
					background: 'rgba(0,0,0,0.5)',
					color: 'white',
				}}
			>
				<CardMedia
					component='img'
					height='400'
					image={apartmentBg}
					alt=''
				/>
				<CardContent>
					<Typography gutterBottom variant='h4' component='div'>
						Lizard
					</Typography>
					<Typography variant='body2'>
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
					<Button sx={{ mt: 2 }} variant='contained'>
						Buy Now
					</Button>
				</CardContent>
			</Card>
		</Collapse>
	);
};

export default Apartment;
