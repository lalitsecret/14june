import React from 'react'
import Rating from './Rating'
import Cartbtn from './Cartbtn'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {data}=props	
	let {cart,user}=state
	const myaddtocart=pid=>{
		let uid=user.id
		if(cart.some(x=>x.uid===user.id && x.pid===pid))
		{
			let single=cart.find(x=>x.uid===user.id && x.pid===pid)
			let {id,qty}=single
			qty+=1
			cart=cart.map(x=>x.id===id?({...x,qty}):x)
		}
		else
		{
			let ob={
				...data,
				...user,
				pid,
				uid,
				qty:1,
				id:cart.length+1
			}
			cart=[...cart,ob]
		}
		dispatch({type:"cart",payload:cart})
	}

	return <div className="item">
		<img width="100" src={data.image} alt=""/>
		<div>{data.title}</div>
		<div>{data.old}</div>
		<div>{data.new}</div>
		<Rating x={data.rating}/>
		<div className="discount">{data.discount} % off</div>
		<div className="tags">{data.tags}</div>
		<Cartbtn addtocart={myaddtocart} a={state.cart} uid={state.user.id} pid={data.id}   />
	</div>
}
export default App