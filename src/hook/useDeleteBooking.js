const useDeleteBooking = () => {
	const handleDelete = (id) => {
		const proceed = window.confirm('Do you want to delete ?');
		console.log(id);
		if (proceed) {
			fetch(`https://dry-falls-36649.herokuapp.com/bookings/${id}`, {
				method: 'delete',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deleteCount > 0) {
						window.alert('deleted successfully');
						console.log(data);
					}
				});
		}
	};
	return handleDelete;
};
export default useDeleteBooking;
