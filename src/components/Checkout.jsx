import React from 'react'
import {_my} from '../utils'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()

	let {user,cart,orders}=state

	const submit=e=>{
		e.preventDefault()

		orders=[...orders,..._my(cart,user)]

		dispatch({type:"orders",payload:orders})

		cart=cart.filter(x=>x.uid!==user.id)

		dispatch({type:"cart",payload:cart})

		alert("Checkout success")

		props.history.push("/Orders")
	}
	return <form onSubmit={submit}>
		<h1>Checkout</h1>
		<p>name</p>
		<div className="form-flex">
			<input value={user.name} placeholder="name" />
			<i className="fa fa-user"></i>
		</div>
		<p>email</p>
		<div className="form-flex">
			<input value={user.email} placeholder="email" />
			<i className="fa fa-user"></i>
		</div>
		<p>phone</p>
		<div className="form-flex">
			<input value={user.phone} placeholder="phone" />
			<i className="fa fa-user"></i>
		</div>
		
		<p>password</p>
		<div className="form-flex">
			<input value={user.password} placeholder="password" />
			<i className="fa fa-user"></i>
		</div>
		<button>login</button>
	</form>
}
export default App