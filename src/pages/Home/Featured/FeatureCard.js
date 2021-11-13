import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WifiIcon from '@mui/icons-material/Wifi';
import { Container } from '@mui/material';
const FeatureCard = () => {
	return (
		<div>
			<Card
				sx={{
					maxWidth: 200,
					height: 200,
					background: 'rgba(30,40,90,0.9)',
					mr: 1,
					color: 'white',
				}}
			>
				<CardContent>
					<WifiIcon />
					<Typography gutterBottom component='div'>
						HI-SPEED WIFI
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};
export default FeatureCard;
