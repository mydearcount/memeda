function login(){
	this.btn=tools.$('#btn');
	this.container=tools.$('#container');
	this.bandEvent();
}
login.prototype={
	constructor:login,
	bandEvent:function(){
		this.btn.onclick=function(){
			this.popBox();
		}.bind(this);
	},
	popBox:function(){
		this.container.innerHTML='<h4>用户登录</h4><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p><label>用户名：<input id="username" type="text"></label></p><p><label>密　码：<input id="password" type="password"></label></p><p><button id="loginBtn" class="loginBtn" type="button">登录</button></p>';
		tools.showCenter(this.container);
		this.modal=document.createElement('div');
		this.modal.className='modal';
		document.body.appendChild(this.modal);
	}
}
new login();