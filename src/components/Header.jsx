import React from 'react'
import {Link} from 'react-router-dom'
import {_my} from '../utils'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {loggedin,user,cart,orders}=state

	const logout=e=>{
		dispatch({type:"logout"})
	}

	let mycart=_my(cart,user)
	let myorders=_my(orders,user)
	return <header>
		<div>
			<h1>React Ecommerce</h1>
		</div>
		<div>
			<Link to="/">Home</Link>
			{!loggedin && <Link to="/Login">Login</Link>}
			{!loggedin && <Link to="/Signup">Signup</Link>}
			{loggedin && <Link to="/Cart">Cart ({mycart.length})</Link>}
			{loggedin && <Link to="/Orders">Orders ({myorders.length})</Link>}
			{loggedin && <Link to="/Checkout">Checkout</Link>}
			{loggedin && <Link to="/Profile">Profile</Link>}
			{loggedin && <Link onClick={logout} to="/Login">Logout {user.name}</Link>}
		</div>
	</header>
}
export default App