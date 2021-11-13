import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const PrivateRoute2 = ({ children, ...rest }) => {
	const { user, admin, loading } = useAuth();
	if (loading) {
		return <CircularProgress />;
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					></Redirect>
				)
			}
		></Route>
	);
};

export default PrivateRoute2;
