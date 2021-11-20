import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Review = ({ review }) => {
	return (
		<Card sx={{ maxWidth: 345, textAlign: 'center', boxShadow: 0 }}>
			<CardMedia component='div' height='70' width='50' image='' alt=''>
				<AccountCircleIcon />
			</CardMedia>
			<CardContent>
				<Typography
					gutterBottom
					sx={{ color: 'orange' }}
					variant='h6'
					component='div'
				>
					{review.displayName}
				</Typography>
				<Typography sx={{ color: 'red' }} variant='body2'>
					rating: {review.rating}
				</Typography>
				<Typography variant='body2'>{review.review}</Typography>
			</CardContent>
		</Card>
	);
};

export default Review;
