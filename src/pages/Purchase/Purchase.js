import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';

const style = {
	background: {
		minHeight: '100vh',
		backgroundImage: `url(https://i.ibb.co/kgvNf9f/apartmentbg2.jpg)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		margin: 0,
	},
	form: {
		display: 'flex',
		flexDirection: 'column',

		justifyContent: 'center',
		alignItems: 'center',

		paddingTop: 5,
	},
	formBackground: {
		minHeight: '70vh',
		background: 'rgba(0,0,1,0.5)',
		marginTop: 20,
	},
	input: {
		width: '70%',
		height: '2rem',
		paddingLeft: 10,
		color: 'white',
		fontWeight: 'bold',
		fontSize: '1.1rem',
		background: 'rgba(0,0,1,0.5)',
		marginBottom: 2,
	},
};

const Purchase = () => {
	const [apartment, setApartment] = useState({});
	const [userInfo, setUserInfo] = useState({});
	const { id } = useParams();
	const { user } = useAuth();

	const { name, price, description1, description2, img } = apartment;

	useEffect(() => {
		fetch(`http://localhost:7000/apartments/${id}`)
			.then((res) => res.json())
			.then((data) => setApartment(data));
	}, [id]);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setUserInfo(data);
		console.log(data);
		reset();
	};

	return (
		<div style={style.background}>
			<Container>
				<Typography sx={{ mb: 2, color: 'green' }} variant='h4'>
					Get the best deal
				</Typography>
				<Box>
					<Card
						sx={{
							// minWidth: 600,
							background: 'rgba(0,0,0,0.9)',
							color: 'white',
						}}
					>
						<CardMedia
							component='img'
							height='600'
							image={img}
							alt=''
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
							>
								{name}
							</Typography>
							<Typography
								sx={{ color: 'purple', mb: 2 }}
								variant='h5'
							>
								Price: {price} BDT
							</Typography>
							<Typography variant='body2'>
								{description1}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
								{description2?.slice(0, 35)}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
								{description2?.slice(35, 59)}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
								{description2?.slice(59, 77)}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
								{description2?.slice(77, 122)}
							</Typography>
							<Typography sx={{ mt: 2, mb: 1 }} variant='body2'>
								{description2?.slice(122, 200)}
							</Typography>
						</CardContent>
					</Card>
					<Box style={style.formBackground}>
						<Typography
							sx={{
								color: 'white',
								fontWeight: 'bold',
								pt: 5,
								color: 'red',
								textAlign: 'center',
							}}
							variant='h5'
						>
							Fill out the form to proceed to payment
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								mt: 2,
							}}
						>
							<form
								onSubmit={handleSubmit(onSubmit)}
								style={style.form}
							>
								<input
									style={style.input}
									defaultValue={user.displayName}
									placeholder='name'
									{...register('name')}
								/>
								<input
									style={style.input}
									defaultValue={user.email}
									type='email'
									placeholder='email'
									{...register('email', {
										required: true,
									})}
								/>
								<input
									style={style.input}
									placeholder='phone '
									type='number'
									{...register('phone', {
										required: true,
									})}
								/>{' '}
								<input
									style={style.input}
									placeholder='address'
									{...register('address', {
										required: true,
									})}
								/>
								<input
									style={style.input}
									color='success'
									type='submit'
								/>
							</form>
						</Box>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Purchase;
