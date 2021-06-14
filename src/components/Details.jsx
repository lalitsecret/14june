import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	return <div className="details">
		<div className="left">
			<img width="300" src="" alt=""/>
		</div>
		<div className="right">
			<h1>id</h1>
			<h1>old</h1>
			<h1>new</h1>
			<h1>rating</h1>
			<h1>discount</h1>
			<h1>tags</h1>
			<h1>image</h1>
			<h1>description</h1>
			<Link to='/'>go back</Link>
		</div>
	</div>
}
export default App