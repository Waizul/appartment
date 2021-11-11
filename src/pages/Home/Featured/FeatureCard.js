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
				sx={{ maxWidth: 200, height: 200, background: 'white', mr: 1 }}
			>
				<CardContent>
					<WifiIcon />
					<Typography gutterBottom variant='h5' component='div'>
						Lizard
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Lizards are a
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};
export default FeatureCard;
