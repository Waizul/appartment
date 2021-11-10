import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bgim from '../../../images/banner/banner4.jpg';
import FeatureCard from './FeatureCard';
const style = {
	background: {
		minHeight: '90vh',
		backgroundImage: `url(${bgim})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		paddingBottom: '1rem',
	},
};
const Featured = () => {
	return (
		<div style={{ marginTop: 20, marginBottom: 20 }}>
			<Typography sx={{ fontSize: '1.7rem', textAlign: 'center' }}>
				FEATURED
				<br /> APARTMENTS
			</Typography>
			<Typography sx={{ textAlign: 'center' }}>lorem20</Typography>
			<Box sx={{ pl: 5, mt: 5 }} style={style.background}>
				<Grid
					sx={{ width: '60%' }}
					container
					spacing={4}
					columns={{ xs: 6, sm: 6, md: 9 }}
					columnSpacing={{ xs: 0, sm: 0, md: 0 }}
				>
					<Grid item xs={3} sm={3} md={3}>
						<FeatureCard />
					</Grid>
					<Grid item xs={3} sm={3} md={3}>
						<FeatureCard />
					</Grid>
					<Grid item xs={3} sm={3} md={3}>
						<FeatureCard />
					</Grid>
					<Grid item xs={3} sm={3} md={3}>
						<FeatureCard />
					</Grid>
					<Grid item xs={3} sm={3} md={3}>
						<FeatureCard />
					</Grid>
					<Grid item xs={3} sm={3} md={3}>
						<FeatureCard />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Featured;
