var oBtnAdd = document.getElementById('add-btn');
var cityInput = document.getElementById('aqi-city-input');
var valueInput = document.getElementById('aqi-value-input');
var oTableRst = document.getElementById('aqi-table');
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = cityInput.value.trim();
	var value = valueInput.value.trim();
	var reCity = /^[a-zA-Z\u0020]+$|^[\u4e00-\u9fa5]+$/;
	var reValue = /^[1-9]\d*$/;
	if(!reCity.test(city)){
		alert('城市名不正确');
		return;
	}
	if(!reValue.test(value)){
		alert('aqi数据不正确');
		return;
	}
	value = parseInt(value, 10);
	aqiData[city] = value;

	
	
	
	/*for(var i in aqiData){
		alert(i + aqiData[i]);
	}*/
	
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	
	/*if(!oTableRst.children[0]){
		var oTabHead = document.createElement('tr');
		oTabHead.innerHTML = '<td>城市</td><td>空气质量</td><td>操作</td>';
		oTableRst.appendChild(oTabHead);
	}
	var oTabTr = document.createElement('tr');
	oTabTr.innerHTML = '<td>'+city+'</td><td>'+aqiData.city+'</td><td><button>删除</button></td>';

	oTableRst.appendChild(oTabTr);*/

	
	if(!getJsonLength(aqiData)){
		oTableRst.innerHTML = '';
		return;
	}else {
		oTableRst.innerHTML = '';
		var oTabHead = document.createElement('tr');
		oTabHead.innerHTML = '<td>城市</td><td>空气质量</td><td>操作</td>';
		oTableRst.appendChild(oTabHead);
	
	
		
		for(var i in aqiData)
		{
			var oTabTr = document.createElement('tr');
			oTabTr.innerHTML = '<td>'+i+'</td><td>'+aqiData[i]+'</td><td><button>删除</button></td>';
			oTableRst.appendChild(oTabTr);
		}

	}

}
function getJsonLength(jsonData){

	var jsonLength = 0;

	for(var item in jsonData){

	jsonLength++;

	}

	return jsonLength;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  	addAqiData();
  	renderAqiList();
  
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  
  delete aqiData[city];
  
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  oBtnAdd.addEventListener('click', addBtnHandle, false);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  oTableRst.addEventListener('click', function(event){
  	if(event.target.nodeName.toUpperCase() == 'BUTTON'){
  		//console.log(event);
  		
  		delBtnHandle(event.target.parentNode.parentNode.children[0].innerHTML)
  	}
  }, false);

}

init();