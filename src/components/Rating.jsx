import React from 'react'
function App(props)
{
	let {x}		=props
	return <div>
		<i style={{color:1<=x?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:2<=x?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:3<=x?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:4<=x?'orange':'silver'}} className="fa fa-star"></i>
		<i style={{color:5<=x?'orange':'silver'}} className="fa fa-star"></i>
	</div>
}
export default App