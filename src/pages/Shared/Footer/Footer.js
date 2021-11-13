import {
	Copyright,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
} from '@mui/icons-material';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
	return (
		<div
			style={{
				maxHeight: '100vh',
				background: 'rgba(30,40,90,1)',
				paddingBottom: '1rem',
			}}
		>
			<Container sx={{ pt: 5 }}>
				<Box
					sx={{
						display: 'flex',
						mt: 5,
						flexWrap: 'wrap',
						justifyContent: 'space-around',
					}}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Button sx={{ color: 'white' }} variant='text'>
							Home
						</Button>
						<Button sx={{ color: 'white' }} variant='text'>
							Featured <br /> Apartment
						</Button>
						<Button sx={{ color: 'white' }} variant='text'>
							Explore
						</Button>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<Button sx={{ color: 'white' }} variant='text'>
							About Us
						</Button>
						<Button sx={{ color: 'white' }} variant='text'>
							COntact Us
						</Button>
						<Button sx={{ color: 'white' }} variant='text'>
							Membership
						</Button>
					</Box>

					<Box>
						<Typography sx={{ color: 'white' }}>
							{' '}
							SUBSCRIBE <br /> To our newsletter
						</Typography>
						<form>
							<TextField
								id='outlined-basic'
								label='email'
								placeholder='email'
								variant='outlined'
								type='email'
							/>
							<Button
								sx={{ display: 'block', background: 'gray' }}
								variant='contained'
								type='submit'
							>
								SUBSCRIBE
							</Button>
						</form>
					</Box>
				</Box>
				<Box sx={{ textAlign: 'center' }}>
					<Typography sx={{ color: 'white' }}>FOLLOW US</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: 'white',
							textAlign: 'center',
						}}
					>
						<Facebook />
						<Twitter />
						<Instagram />
						<LinkedIn />
					</Box>
				</Box>
				<Box>
					<Typography
						sx={{ color: 'white', mt: 2, textAlign: 'center' }}
					>
						Copyright <Copyright /> 2021 All rights reserved to No
						<span style={{ color: 'green' }}>vart</span>
					</Typography>
				</Box>
			</Container>
		</div>
	);
};

export default Footer;
