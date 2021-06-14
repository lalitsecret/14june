import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_login,_user} from '../utils'
function App(props)
{

	let [ob,setob]=React.useState({email:"",password:""})

	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()

	let {users}=state
	const submit=e=>{
		e.preventDefault()
		if(_login(users,ob))
		{
			alert("welcome "+_user(users,ob).name)
			dispatch({type:"login",payload:_user(users,ob)})	
			props.history.push("/")
		}
		else
		{

			alert("failed to loggedin ")
		}
	}
	return <form onSubmit={submit}>
		<h1>Login</h1>
		<p>email</p>
		<div className="form-flex">
			<input 
			value={ob.email}
			onChange={e=>setob({...ob,email:e.target.value})}
			placeholder="email"
			 />
			<i className="fa fa-user"></i>
		</div>
		<p>password</p>
		<div className="form-flex">
			<input 
			value={ob.password}
			onChange={e=>setob({...ob,password:e.target.value})}
			placeholder="password"
			 />
			<i className="fa fa-user"></i>
		</div>
		<button>Login</button>
	</form>
}
export default App