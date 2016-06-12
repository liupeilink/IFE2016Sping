var form = document.forms[0];
//form.elements['username']
var oHint = document.getElementById('hint');

form.addEventListener('submit', function(event){
	event = event || window.event;
	
	var length = 0;
	var value = form.elements['username'].value;
	for(var i in value)
	{
		
		value.charAt(i).match(/[^\x00-\xff]/) ?	length+=2 : length++;
		
	}
	
	if(length == 0){
		
		
		oHint.innerHTML = '姓名不能为空';
		oHint.className = 'false';
		form.elements['username'].className = 'false';

		event.preventDefault(event);
		
	}else if(length<4||length>16){
		oHint.innerHTML = '长度必须为4-16个字符！';
		oHint.className = 'false';
		form.elements['username'].className = 'false';

		event.preventDefault(event);
		
	}else{
		oHint.innerHTML = '名称格式正确';
		oHint.className = 'true';
		form.elements['username'].className = 'true';

		event.preventDefault(event);//正常将跳转 为了显示效果不跳转
	}
}, false);

