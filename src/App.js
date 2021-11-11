import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer/Footer';
import Explore from './pages/Explore/Explore';
import Contact from './pages/Home/Contact/Contact';
import ProvideAuth from './context/ProvideAuth';
import Login from './pages/InputUser/Login';
import Register from './pages/InputUser/Register';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<ProvideAuth>
			<Router>
				{/* <Navbar /> */}
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/home'>
						<Home></Home>
					</Route>
					<Route path='/explore'>
						<Explore />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<PrivateRoute path='/purchase/:id'>
						<Purchase />
					</PrivateRoute>
					<PrivateRoute path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
				</Switch>
				<Footer />
			</Router>
		</ProvideAuth>
	);
}
export default App;
