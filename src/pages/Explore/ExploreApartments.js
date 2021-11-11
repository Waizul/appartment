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

const style = {
	size: {},
};
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
					<Typography gutterBottom variant='h4' component='div'>
						{name}
					</Typography>
					<Typography variant='body2'>{price}</Typography>
					<Typography variant='body2'>{description1}</Typography>
					<Typography variant='body2'>{description2}</Typography>
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
