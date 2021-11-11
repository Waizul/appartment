import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Collapse,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
const style = {
	boxShadow: '5px 5px 5px 5px solid gray',
};
const Apartment = ({ apartment, checked }) => {
	const { _id, name, description1, price, img } = apartment;
	const history = useHistory();

	const handleBuyNow = (id) => {
		history.push(`/purchase/${id}`);
	};
	return (
		<Grid item xs={4} sm={4} md={6} style={style}>
			<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
				{' '}
				<Card
					sx={{
						maxWidth: 600,
						background: 'rgba(0,0,0,0.1)',
						// color: 'white',
					}}
				>
					<CardMedia
						component='img'
						height='400'
						image={img}
						alt=''
					/>
					<CardContent>
						<Typography gutterBottom variant='h4' component='div'>
							{name}
						</Typography>
						<Typography variant='body2'>{description1}</Typography>
						<Typography
							sx={{ color: 'purple', mb: 2 }}
							variant='h5'
						>
							Price: {price} BDT
						</Typography>
						<Button
							sx={{ mt: 2 }}
							variant='contained'
							onClick={() => handleBuyNow(_id)}
						>
							Buy Now
						</Button>
					</CardContent>
				</Card>
			</Collapse>
		</Grid>
	);
};

export default Apartment;
