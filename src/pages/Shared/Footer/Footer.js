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
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div
			style={{
				maxHeight: '100vh',
				background: 'rgb(2, 2, 12)',
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
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
						}}
					>
						<Link to='/home'>
							{' '}
							<Button sx={{ color: 'white' }} variant='text'>
								Home
							</Button>
						</Link>
						<Button sx={{ color: 'white' }} variant='text'>
							Featured
						</Button>
						<Button sx={{ color: 'white' }} variant='text'>
							Explore
						</Button>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
						}}
					>
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
								sx={{ background: 'rgb(250,250,240)' }}
								id='outlined-basic'
								label='email'
								placeholder='email'
								variant='outlined'
								type='email'
							/>
							<Button
								sx={{
									display: 'block',
									background: 'rgb(2,2,12)',
								}}
								variant='contained'
								type='submit'
							>
								SUBSCRIBE
							</Button>
						</form>
					</Box>
				</Box>
				<Box sx={{ textAlign: 'center', mt: 5 }}>
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
						sx={{
							color: 'white',
							mt: 3,
							textAlign: 'center',
						}}
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
