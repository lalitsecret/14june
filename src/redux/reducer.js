import data from './data'

const intialState={
	products:data.products,
	tags:data.tags,
	filters:["id","old","new","rating","discount"],
	search:"",
	tagname:"",
	col:"id",
	order:true,
	loggedin:false,
	user:{},
	cart:[],
	orders:[],
	users:[{id:1,name:"lalit sharma",email:"lalit@gmail.com",phone:"1234567890",password:"lalit"}],
}
function reducer(state=intialState,action)
{	
	switch(action.type)
	{
		case "user":return {...state,user:action.payload}
		case "users":return {...state,users:action.payload}
		case "orders":return {...state,orders:action.payload}
		case "cart":return {...state,cart:action.payload}
		case "tagname":return {...state,tagname:action.payload}
		case "search":return {...state,search:action.payload}
		case "col":return {...state,col:action.payload,order:!state.order}
		case "signup":return {...state,users:action.payload}
		case "login":return {...state,user:action.payload,loggedin:true}
		case "logout":return {...state,user:{},loggedin:false}
		default:
			return state
	}
}
export default reducer