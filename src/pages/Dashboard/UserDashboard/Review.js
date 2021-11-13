import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';
import useStyle from '../../hook/useStyle';

const Review = () => {
	const [success, setSuccess] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuth();
	const style = useStyle();
	const onSubmit = (data) => {
		const newData = { ...data, displayName: user.displayName };
		fetch('https://dry-falls-36649.herokuapp.com/review', {
			method: 'post',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(newData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('review added');
					setSuccess(true);
				}
			});
		console.log(newData);
		reset();
	};
	return (
		<div>
			<Alert severity='success'>review added</Alert>
			<form onSubmit={handleSubmit(onSubmit)} style={style.form}>
				<h3>Review</h3>
				<textarea
					placeholder='write review'
					{...register('review', { required: true })}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						height: 50,
						alignItems: 'center',
						marginBottom: 10,
					}}
				>
					<p>Rate: </p>
					<select {...register('rating')}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</div>

				<input type='submit' />
			</form>
		</div>
	);
};

export default Review;
