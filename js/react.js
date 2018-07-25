/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-25 10:59:04
 * @version $Id$
 */

/*target:实现一个组件，能够监听数据的变化，动态的维护视图，处理UI与用户的交互*/

var component = window._react_={
	root:document.getElementById('root'),
	data:{
		name:'Jack'
	},
	setData:function(key, val){
		var _t = this;
		_t.data[key] = val;
		_t.render();
	},
	render:function(){
		var _t = this;
		var template = `<div onclick="changeName.bind(this)">Hello,${_t.data.name}!</div>`;
		_t.root.innerHTML = template;
	},
	start:function(){
		var _t = this;
		_t.ready();
		_t.render();
	},
	ready:function(){
		var _t = this;

		setTimeout(function(){
			_t.setData('name','React');
		},2000)
	},
	changeName:function(){
		console.log(_t);
		var _t = this;
		_t.setData("name","单丽君")
	}
};
function changeName(){
	console.log(_t);
		var _t = this;
		_t.setData("name","单丽君")
}
component.start();
//component.setData('name',"张三");
