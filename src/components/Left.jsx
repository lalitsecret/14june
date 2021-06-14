import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {tags,tagname}=state
	return <div className="left">
		{tags.map(x=>
			<p
			key={x.t}
			className={tagname===x.t?'active':''}
			onClick={e=>dispatch({type:"tagname",payload:x.t})}
			>{x.t}<span>{x.c}</span></p>
		)}
	</div>
}
export default App