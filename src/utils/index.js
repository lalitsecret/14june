export function _my(a,user)
{
	return a.filter(x=>x.uid===user.id)
}
export function _qtyonthisitem(a,pid,uid)
{
	
	if(a.some(x=>x.uid===uid && pid===x.pid))
	{
		return a.find(x=>x.uid===uid && pid===x.pid).qty
	}
	else
	{
		return 0
	}
}
export function _signup(a,ob)
{
	return a.some(x=>x.email===ob.email)
}
export function _login(a,ob)
{
	return a.some(x=>x.email===ob.email && x.password===ob.password)
}
export function _user(a,ob)
{
	return a.find(x=>x.email===ob.email && x.password===ob.password)
}

export function _subtotal(a)
{
	if(a.length>0)
	{
		return a.map(x=>x.qty*x.new*x.discount/100).map(x=>Math.ceil(x)).reduce((sum,next) =>sum+next)
	}	
	else
	{
		return 0
	}
}
