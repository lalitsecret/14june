import React from 'react'
import Item from './Item'
import {useSelector,useDispatch} from 'react-redux'
function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {products,tagname,search,col,order}=state
	products=products.filter(x=>x.tags.startsWith(tagname))	
	products=products.filter(x=>Object.values(x).join("").includes(search))	
	products=products.sort((x,y) =>order?(x[col]-y[col]):(y[col]-x[col]))

	return <div className="products">
		{products.map(x=>
			<Item key={x.id} data={x} />
		)}
	</div>
}
export default App