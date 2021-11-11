import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { Button, Menu } from '@mui/material';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fontSize } from '@mui/system';
import useAuth from '../../hook/useAuth';
const Navbar = () => {
	// const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const history = useHistory();
	// const handleChange = (event) => {
	// 	setAuth(event.target.checked);
	// };
	const { user, logOut } = useAuth();

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	console.log(isMobile);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageUrl) => {
		history.push(pageUrl);
		setAnchorEl(null);
	};

	const style = {
		navLink: { fontWeight: 'bold', color: 'red' },
		button: {
			boxShadow: 0,
			fontSize: '1rem',
			color: 'white',
			TextDecoration: 'none',
		},
	};
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
		>
			{/* <FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={auth}
							onChange={handleChange}
							aria-label='login switch'
						/>
					}
					label={auth ? 'Logout' : 'Login'}
				/>
			</FormGroup> */}
			<AppBar
				position='static'
				sx={{ background: 'rgba(0,0,0,0)', boxShadow: 0 }}
			>
				<Toolbar
					sx={{
						display: 'flex',
						flexGrow: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{isMobile ? (
						<>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='menu'
								sx={{ mr: 2 }}
								onClick={handleMenu}
							>
								<MenuIcon />
							</IconButton>
							<MenuItem
								variant='h4'
								component='div'
								sx={{ flexGrow: 1, fontSize: '1.3rem' }}
								onClick={() => handleMenuClick('/')}
							>
								No <span style={{ color: 'green' }}>vart</span>
							</MenuItem>
							<div>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorEl)}
									onClose={() => setAnchorEl(null)}
								>
									<MenuItem
										onClick={() => handleMenuClick('/home')}
									>
										Home
									</MenuItem>
									<MenuItem
										onClick={() =>
											handleMenuClick('/explore')
										}
									>
										Explore
									</MenuItem>
									<MenuItem
										onClick={() =>
											handleMenuClick('/contact')
										}
									>
										Contact
									</MenuItem>{' '}
									{user?.email ? (
										<MenuItem onClick={logOut}>
											Log Out
										</MenuItem>
									) : (
										<MenuItem
											onClick={() =>
												handleMenuClick('/login')
											}
										>
											Login
										</MenuItem>
									)}
								</Menu>
							</div>{' '}
						</>
					) : (
						<div>
							<Button
								sx={{
									textDecoration: 'none',
									background: 'none',
								}}
								variant='contained'
								onClick={() => handleMenuClick('/home')}
							>
								Home
							</Button>

							<Button
								sx={{
									textDecoration: 'none',
									background: 'none',
								}}
								variant='contained'
								onClick={() => handleMenuClick('/explore')}
							>
								Explore
							</Button>
							<Button
								sx={{
									textDecoration: 'none',
									background: 'none',
								}}
								variant='contained'
								onClick={() => handleMenuClick('/contact')}
							>
								Contact
							</Button>
							{user?.email ? (
								<Button
									sx={{
										textDecoration: 'none',
										background: 'none',
									}}
									variant='contained'
									onClick={logOut}
								>
									Log Out
								</Button>
							) : (
								<Button
									sx={{
										textDecoration: 'none',
										background: 'none',
									}}
									variant='contained'
									onClick={() => handleMenuClick('/login')}
								>
									Login
								</Button>
							)}
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
