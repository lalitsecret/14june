import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {user,users}	=state

	const handleClick=e=>{
		let p=prompt("enter new password",user.password)
		if(p)
		{
			if(p===user.password)
			{
				alert("password cannot be old password")
			}
			else
			{
				user={...user,password:p}
				users=users.map(x=>x.id===user.id?user:x)
				dispatch({type:"user",payload:user})
				dispatch({type:"users",payload:users})
				alert("password chnaged successfully")
				dispatch({type:"logout"})
			}
		}
	}
	return <div className="profile">
		<div className="card">
			<h1>welcome {user.name}</h1>
			<h2>name {user.name}</h2>
			<h2>email : {user.email} </h2>
			<h2>phone : {user.phone} </h2>
			<h2>password : {user.password} </h2>
			<button onClick={handleClick}>Change password <i className="fa fa-key"></i></button>
		</div>
	</div>
}
export default App