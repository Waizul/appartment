import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/invertedcommabg.png';

// const style = {
// 	background: {
// 		minHeight: '90vh',
// 		backgroundImage: `url(${bg})`,
// 		backgroundPosition: 'right-corner',
// 		backgroundSize: 'contain',
// 		backgroundRepeat: 'no-repeat',
// 	},
// };
const Review = () => {
	return (
		<Box sx={{ minHeight: '90vh' }}>
			<Typography sx={{ fontSize: '2rem', mt: 5, textAlign: 'center' }}>
				Love by our customers
			</Typography>
			<div></div>
		</Box>
	);
};

export default Review;
