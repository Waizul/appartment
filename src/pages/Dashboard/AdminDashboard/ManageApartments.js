import useApartment from '../../../hook/useApartment';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageApartments = () => {
	const apartments = useApartment(0);

	const handleDelete = (id) => {
		const proceed = window.confirm('Do you want to delete ?');
		if (proceed) {
			fetch(`https://dry-falls-36649.herokuapp.com/apartments/${id}`, {
				method: 'delete',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deleteCount > 0) {
						alert('deleted successfully');
					}
				});
		}
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
							<TableCell align='center'>Apartment</TableCell>

							<TableCell align='center'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{apartments?.map((row) => (
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
								<TableCell component='th' scope='row'>
									<Button
										variant='outlined'
										onClick={() => handleDelete(row._id)}
									>
										Delete
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

export default ManageApartments;
