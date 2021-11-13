import React from 'react';
import useAuth from '../../hook/useAuth';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const DashboardHome = () => {
	const { admin } = useAuth();
	return (
		<div>
			<UserDashboard />
			{admin && <AdminDashboard />}
		</div>
	);
};

export default DashboardHome;
