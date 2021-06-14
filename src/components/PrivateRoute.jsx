import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
function App(props)
{
	let state=useSelector(stateFromStore=>stateFromStore)
	
	if(state.loggedin)
	{
		return <Route  {...props} component={props.component} />
	}
	else
	{
		return <Redirect to="/login"/>
	}
}
export default App