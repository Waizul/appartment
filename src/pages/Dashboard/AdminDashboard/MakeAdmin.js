import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const style = {
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 5,
	},
	formBackground: {
		minHeight: '50vh',
		marginTop: 70,
	},
	input: {
		width: '70%',
		height: '2rem',
		paddingLeft: 10,
		fontWeight: 'bold',
		fontSize: '1.1rem',
		marginBottom: 5,
	},
};
const MakeAdmin = () => {
	const [success, setSuccess] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		fetch('https://dry-falls-36649.herokuapp.com/users/admin', {
			method: 'put',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					setSuccess(true);
				}
				console.log(data);
			});

		console.log(data);
		reset();
	};
	return (
		<div style={style.formBackground}>
			{success && <Alert severity='success'>Admin role added</Alert>}
			<form onSubmit={handleSubmit(onSubmit)} style={style.form}>
				<input
					style={style.input}
					placeholder='name'
					{...register('name', { required: true })}
				/>

				<input
					style={style.input}
					placeholder='email'
					type='email'
					{...register('email', { required: true })}
				/>

				<input style={style.input} type='submit' />
			</form>
		</div>
	);
};

export default MakeAdmin;
