import { Button, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import banner from '../../../images/banner.jpg';

const style = {
	background: {
		minHeight: '100vh',
		backgroundImage: `url(https://i.ibb.co/r6wwyLZ/banner.jpg)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		paddingBottom: 150,
	},
	colorText: { color: 'green' },
};
const Header = () => {
	const [checked, setChecked] = React.useState(false);
	useEffect(() => setChecked(true), []);

	return (
		<div style={style.background} id='header'>
			<Navbar />
			<Collapse
				in={checked}
				{...(checked ? { timeout: 1500 } : {})}
				collapseHeight={50}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '90vh',
						fontSize: '4rem',
						textAlign: 'center',
					}}
				>
					<div>
						<Typography
							sx={{
								color: 'white',
								fontSize: '2.2rem',
								fontWeight: 'bold',
							}}
						>
							Welcome to <br /> No
							<span style={style.colorText}>vart</span> <br />
							A Fair of <br />
							Luxurious Apartment
						</Typography>
						<Link style={{ textDecoration: 'none' }} to='/explore'>
							<Button variant='contained'>Explore</Button>
						</Link>
					</div>
				</Box>
			</Collapse>
		</div>
	);
};

export default Header;
