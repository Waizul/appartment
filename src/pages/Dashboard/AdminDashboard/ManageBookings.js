import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hook/useAuth';
import { Button, Container } from '@mui/material';
import useDeleteBooking from '../../../hook/useDeleteBooking';
const ManageBookings = () => {
	const [bookings, setBookings] = useState([]);

	const { user } = useAuth();

	const handleDelete = useDeleteBooking();

	useEffect(() => {
		fetch('https://dry-falls-36649.herokuapp.com/bookings')
			.then((res) => res.json())
			.then((data) => {
				setBookings(data);
				console.log(data);
			});
	}, [user.email]);

	const handleConfirm = (id) => {
		fetch(`https://dry-falls-36649.herokuapp.com/bookings/${id}`, {
			method: 'put',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('booking confirmed');
				}
			});
		console.log(id);
	};
	return (
		<div style={{ minHeight: '50vh' }}>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 450 }}
					size='small'
					aria-label='a dense table'
				>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='center'>Apartment</TableCell>
							<TableCell align='center'>Date</TableCell>
							<TableCell align='center'>Status</TableCell>
							<TableCell align='center'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bookings?.map((row) => (
							<TableRow
								key={row._id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='center'>
									{row.apartment}
								</TableCell>
								<TableCell align='center'>{row.date}</TableCell>
								<TableCell sx={{ color: 'red' }} align='center'>
									{row.status}
								</TableCell>
								<TableCell align='center'>
									<Button
										sx={{ mr: 1 }}
										variant='contained'
										onClick={() => handleConfirm(row._id)}
									>
										Confirm
									</Button>
									<Button
										variant='contained'
										onClick={() => handleDelete(row._id)}
									>
										Cancel
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ManageBookings;
