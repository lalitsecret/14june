import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_my,_subtotal} from '../utils'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {orders,user}=state
	let myorders=_my(orders,user)


	return <div className="orders">
		<h1>My orders ({myorders.length})</h1>
		<h2>subtotal {_subtotal(myorders)}</h2>
		<table cellPadding={10} cellSpacing={0}>
			<thead>
				<tr>
					<th>sno</th>
					<th>title</th>
					<th>product</th>
					<th>qty</th>
					<th>price</th>
				</tr>
			</thead>
			<tbody>
				{myorders.map(item=>
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.title}</td>
						<td>
							<img width="50" src={item.image} alt=""/>

						</td>
						<td>
								{item.qty}
						</td>
						<td>{item.new*item.qty*item.discount/100}</td>
					</tr>
				)}
			</tbody>
		</table>
	</div>
}
export default App