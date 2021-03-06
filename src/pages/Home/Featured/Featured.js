import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FeatureCard from './FeatureCard';

const style = {
	background: {
		minHeight: '100vh',
		width: '100%',
		backgroundImage: `url(https://i.ibb.co/mqYFqym/featured.jpg)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 100%',
		paddingBottom: '1rem',
	},
};

const Featured = () => {
	return (
		<div style={{ marginTop: 20, marginBottom: 20 }}>
			<Typography
				sx={{
					fontSize: '2.1rem',
					mt: 12,
					textAlign: 'center',
					fontFamily: 'roboto',
				}}
			>
				Featured Apartments
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
			<Typography
				sx={{
					textAlign: 'center',
					fontFamily: 'roboto',
					width: '77%',
					mx: 'auto',
				}}
			>
				Discover our spaces that defines a new dimension of luxury. An
				essential aspect of creativity is not being afraid to fail.
				Design like you are absolutely right, then optimize like you
				were wrong. Cultivating market leadership from the inside out.
			</Typography>
			<Box sx={{ pl: 5, mt: 7 }} style={style.background}>
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
