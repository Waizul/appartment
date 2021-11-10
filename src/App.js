import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/Home/Home/Contact';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Shared/Navbar';

import Explore from './pages/Explore/Explore';

function App() {
	return (
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
			</Switch>
		</Router>
	);
}
export default App;
