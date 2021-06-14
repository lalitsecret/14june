import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_my,_subtotal} from '../utils'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {cart,user}=state
	let mycart=_my(cart,user)

	const updateQty=(id,qty) =>{
		cart=cart.map(x=>x.id===id?({...x,qty}):x)
		dispatch({type:"cart",payload:cart})
	}
	const removeFromCart=id=>{
		cart=cart.filter(x=>x.id!==id)
		dispatch({type:"cart",payload:cart})
	}

	return <div className="cart">
		<h1>My Cart ({mycart.length})</h1>
		<h2>subtotal {_subtotal(mycart)}</h2>
		<table cellPadding={10} cellSpacing={0}>
			<thead>
				<tr>
					<th>sno</th>
					<th>title</th>
					<th>product</th>
					<th>qty</th>
					<th>price</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{mycart.map(item=>
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.title}</td>
						<td>
							<img width="50" src={item.image} alt=""/>

						</td>
						<td>
							<button disabled={item.qty<2} onClick={e=>updateQty(item.id,item.qty-1)}>-</button>
								{item.qty}
							<button onClick={e=>updateQty(item.id,item.qty+1)}>+</button>
						</td>
						<td>{item.new*item.qty*item.discount/100}</td>
						<td>
							<button onClick={e=>removeFromCart(item.id)}><i className="fa fa-trash-o"></i></button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</div>
}
export default App