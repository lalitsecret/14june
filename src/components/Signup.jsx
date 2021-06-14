import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_signup} from '../utils'
function App(props)
{

	let [ob,setob]=React.useState({name:"",email:"",phone:"",password:""})

	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()

	let {users}=state
	const submit=e=>{
		e.preventDefault()
		if(_signup(users,ob))
		{
			alert("failed to signup")
		}
		else
		{
			users=[...users,{...ob,id:users.length+1}]
			dispatch({type:"signup",payload:users})
			alert("signup success")
			props.history.push("/Login")
		}
	}
	return <form onSubmit={submit}>
		<h1>Signup</h1>
		<p>name</p>
		<div className="form-flex">
			<input 
			value={ob.name}
			onChange={e=>setob({...ob,name:e.target.value})}
			placeholder="name"
			 />
			<i className="fa fa-user"></i>
		</div>
		<p>email</p>
		<div className="form-flex">
			<input 
			value={ob.email}
			onChange={e=>setob({...ob,email:e.target.value})}
			placeholder="email"
			 />
			<i className="fa fa-user"></i>
		</div>
		<p>phone</p>
		<div className="form-flex">
			<input 
			value={ob.phone}
			onChange={e=>setob({...ob,phone:e.target.value})}
			placeholder="phone"
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
		<button>Signup</button>
	</form>
}
export default App