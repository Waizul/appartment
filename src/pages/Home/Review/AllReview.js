import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
		<Container sx={{ minHeight: '50vh' }}>
			<Typography
				sx={{
					fontSize: '2.1rem',
					mt: 7,
					textAlign: 'center',
					fontFamily: 'roboto',
				}}
			>
				Love by our customers
			</Typography>
			<Box
				sx={{
					width: '140px',
					borderTop: '3px solid orange',
					mt: 2,
					mb: 3,
					mx: 'auto',
				}}
			></Box>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{review.map((rev) => (
					<Grid item xs={4} sm={4} md={4}>
						<Review review={rev} key={rev._id} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default AllReview;
