import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {filters,search,col}=state
	return <div className="filters">
		{filters.map(x=>
			<button
			key={x}
			className={x===col?'active':''}
			onClick={e=>dispatch({type:"col",payload:x})}
			><i className="fa fa-sort"></i>{x}</button>
		)}
		<input 
		value={search}
		onChange={e=>dispatch({type:"search",payload:e.target.value})}
		placeholder="search" />
	</div>
}
export default App