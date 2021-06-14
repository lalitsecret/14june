import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	return <div className="error">
		<h1>Page not found</h1>
	</div>
}
export default App