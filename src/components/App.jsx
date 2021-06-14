import React from 'react'
import PrivateRoute from './PrivateRoute'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Header from './Header';
import  Footer from './Footer';
import  Home from './Home';
import  Login from './Login';
import  Signup from './Signup';
import  Cart from './Cart';
import  Orders from './Orders';
import  Profile from './Profile';
import  Checkout from './Checkout';
import  Details from './Details';
import  Errpage from './Errpage';
function App()
{
	return <BrowserRouter>
		<Header/>
		{/*<img src="/img/loader2.gif" className="loader" />*/}
		<div className="container">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/Signup" component={Signup} />
				<PrivateRoute exact path="/Cart" component={Cart} />
				<PrivateRoute exact path="/Orders" component={Orders} />
				<PrivateRoute exact path="/Profile" component={Profile} />
				<PrivateRoute exact path="/Checkout" component={Checkout} />
				<Route exact path="/Details" component={Details} />
				<Route   component={Errpage} />
			</Switch>
		</div>
		<Footer/>
	</BrowserRouter>
}
export default App