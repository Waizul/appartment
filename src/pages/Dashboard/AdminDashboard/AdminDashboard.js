import React from 'react';
import AddApartment from './AddApartment';
import MakeAdmin from './MakeAdmin';
import ManageApartments from './ManageApartments';
import ManageBookings from './ManageBookings';

const AdminDashboard = () => {
	return <div><ManageBookings />
		<ManageApartments />
		<AddApartment />
	<MakeAdmin/></div>;
};

export default AdminDashboard;
