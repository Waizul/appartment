import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useAuth from '../../hook/useAuth';

import { Switch, Route, Link, NavLink, useRouteMatch } from 'react-router-dom';
import MyBooking from './UserDashboard/MyBooking';
import Payment from './UserDashboard/Payment';
import Review from './UserDashboard/Review';
import ManageBookings from './AdminDashboard/ManageBookings';
import ManageApartments from './AdminDashboard/ManageApartments';
import AdminRoute from './AdminRoute';
import AddApartment from './AdminDashboard/AddApartment';
import MakeAdmin from './AdminDashboard/MakeAdmin';
import DashboardHome from './DashboardHome';

const drawerWidth = 240;

function Dashboard(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const { user, admin, logOut } = useAuth();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	let { path, url } = useRouteMatch();

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem button>
					<ListItemIcon />
					<NavLink style={{ textDecoration: 'none' }} to='/explore'>
						<ListItemText>Explore</ListItemText>
					</NavLink>
				</ListItem>
				{!admin && (
					<Box>
						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/myBooking`}
							>
								<ListItemText>My Bookings</ListItemText>
							</NavLink>
						</ListItem>

						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/payment`}
							>
								<ListItemText>My Payment</ListItemText>{' '}
							</NavLink>
						</ListItem>

						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/review`}
							>
								<ListItemText>Add Review</ListItemText>
							</NavLink>
						</ListItem>
					</Box>
				)}

				{admin && (
					<Box>
						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/manageBookings`}
							>
								<ListItemText>Manage Bookings</ListItemText>
							</NavLink>
						</ListItem>
						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/manageApartments`}
							>
								<ListItemText>Manage Apartments</ListItemText>
							</NavLink>
						</ListItem>
						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/addApartment`}
							>
								<ListItemText>Add Apartment</ListItemText>
							</NavLink>
						</ListItem>
						<ListItem button>
							<ListItemIcon />
							<NavLink
								style={{ textDecoration: 'none' }}
								activeStyle={{ color: 'red' }}
								to={`${url}/makeAdmin`}
							>
								<ListItemText>Make Admin</ListItemText>
							</NavLink>
						</ListItem>
					</Box>
				)}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Link style={{ textDecoration: 'none' }} to={`${url}`}>
						<Button
							sx={{ color: 'white', fontSize: '1.1rem' }}
							variant='contained'
						>
							Dashboard
						</Button>
					</Link>
					{/* <Typography
						variant='h6'
						noWrap
						component='div'
					></Typography> */}
					{user?.email && (
						<Button
							sx={{ color: 'white', fontSize: '1.1rem' }}
							variant='contained'
							onClick={logOut}
						>
							Log Out
						</Button>
					)}
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Switch>
					<Route exact path={`${path}`}>
						<DashboardHome />
					</Route>
					<Route path={`${path}/myBooking`}>
						<MyBooking />
					</Route>
					<Route path={`${path}/payment`}>
						<Payment />
					</Route>
					<Route path={`${path}/review`}>
						<Review />
					</Route>
					<AdminRoute path={`${path}/manageBookings`}>
						<ManageBookings />
					</AdminRoute>
					<AdminRoute path={`${path}/manageApartments`}>
						<ManageApartments />
					</AdminRoute>
					<AdminRoute path={`${path}/addApartment`}>
						<AddApartment />
					</AdminRoute>
					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>
				</Switch>
			</Box>
		</Box>
	);
}

export default Dashboard;
