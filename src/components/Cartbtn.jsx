import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_qtyonthisitem} from '../utils'
function App(props)
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {loggedin}	=state
	let {uid,pid,a}=props

	if(loggedin)
	{
		return <div 
		onClick={e=>props.addtocart(pid)}
		className="cart-btn">
			<i className="fa fa-shopping-cart"></i>
			{"  "} ({_qtyonthisitem(a,pid,uid)})
		</div>
	}
	else
	{	
		return null
	}
}
export default App