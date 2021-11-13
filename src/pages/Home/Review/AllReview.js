import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from './Review';

const AllReview = () => {
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch('https://dry-falls-36649.herokuapp.com/review')
			.then((res) => res.json())
			.then((data) => setReview(data));
	}, []);

	return (
		<Container sx={{ minHeight: '90vh' }}>
			<Typography sx={{ fontSize: '2rem', mt: 5, textAlign: 'center' }}>
				Love by our customers
			</Typography>

			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{review.map((rev) => (
					<Grid item xs={4} sm={4} md={4}>
						<Review review={rev} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default AllReview;
