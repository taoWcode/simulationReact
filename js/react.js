/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-25 10:59:04
 * @version $Id$
 */

/*target:实现一个组件，能够监听数据的变化，动态的维护视图，处理UI与用户的交互*/

var component = {
	data:{
		name:'Jack'
	},
	setData:function(key, val){
		var _t = this;
		_t.date[key] = val;
	}
};
