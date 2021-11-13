import { Alert } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useStyle from '../../hook/useStyle';
const AddApartment = () => {
	const { register, handleSubmit, reset } = useForm();

	const style = useStyle();

	const onSubmit = (data) => {
		fetch('https://dry-falls-36649.herokuapp.com/apartments', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('apartment added');
					console.log(data);
				}
			});
		console.log(data);
		reset();
	};

	return (
		<div style={style.formBackground}>
			<Alert severity='success'>Apartment added</Alert>;
			<form onSubmit={handleSubmit(onSubmit)} style={style.form}>
				<input
					style={style.input}
					placeholder='name of apartment'
					{...register('name', { required: true })}
				/>

				<input
					style={style.input}
					placeholder='description1'
					{...register('description1', { required: true })}
				/>

				<input
					style={style.input}
					placeholder='description2'
					{...register('description2', { required: true })}
				/>

				<input
					style={style.input}
					placeholder='price'
					{...register('price', { required: true })}
				/>
				<input
					style={style.input}
					placeholder='image url'
					{...register('img', { required: true })}
				/>

				<input style={style.input} type='submit' />
			</form>
		</div>
	);
};

export default AddApartment;
