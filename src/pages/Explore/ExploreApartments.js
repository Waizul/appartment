import React, { useEffect } from 'react';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Collapse,
	Typography,
} from '@mui/material';
import { useHistory } from 'react-router';
import { Box } from '@mui/system';

const ExploreApartments = ({ apartment }) => {
	const [checked, setChecked] = React.useState(false);
	useEffect(() => setChecked(true), []);
	const { _id, name, description1, description2, img, price } = apartment;

	const history = useHistory();

	const handleBuyNow = (id) => {
		history.push(`/purchase/${id}`);
	};

	return (
		<Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
			<Card
				sx={{
					maxWidth: 600,
					background: 'rgba(0,0,0,0.5)',
					color: 'white',
				}}
			>
				<CardMedia component='img' height='400' image={img} alt='' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography
						sx={{
							color: 'purple',
							mb: 2,
						}}
						variant='h5'
					>
						Price: {price} BDT
					</Typography>
					<Typography variant='body2'>{description1}</Typography>
					<Typography
						sx={{ mt: 2, mb: 1, fontFamily: 'roboto' }}
						variant='body2'
					>
						{description2?.slice(0, 35)}
					</Typography>
					<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
						{description2?.slice(35, 59)}
					</Typography>
					<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
						{description2?.slice(59, 77)}
					</Typography>
					<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
						{description2?.slice(77, 122)}
					</Typography>
					<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
						{description2?.slice(122, 200)}
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
	);
};

export default ExploreApartments;
