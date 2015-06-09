var scrollTimes = 1;
window.onload=function(){
	var a=document.getElementsByClassName("scrollpointer");
	a[0].style.backgroundColor="#FFAC0C";
	debugger
	window.onmousewheel = scrollFunc;
}
function selectScoll(value){
	getChange(value.id);
}
function getChange(value){
	debugger
	var first=document.getElementsByClassName("first");
	var secound=document.getElementsByClassName("secound");
	var third=document.getElementsByClassName("third");
	var four=document.getElementsByClassName("four");
	var list=[first,secound,third,four];
		var a=document.getElementsByClassName("scrollpointer");
	for(var i=0;i<list.length;i++){
		if(value==i+1){
			list[i][0].style.display="block";
			a[i].style.backgroundColor="#FFAC0C";
		}else{
			list[i][0].style.display="none";
			a[i].style.backgroundColor="#FFDA93";
		}
	}
}

var scrollFunc = function(e) {
	var direct = 0;
	e = e || window.event;
	debugger
	if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
		if (e.wheelDelta > 0) { //当滑轮向上滚动时
			if (scrollTimes <= 1) {
				scrollTimes = 1;
			} else {
				scrollTimes = scrollTimes - 1;
			}
			getChange(scrollTimes);
		}
		if (e.wheelDelta < 0) { //当滑轮向下滚动时
			if (scrollTimes >= 4) {
				scrollTimes = 4;
			} else {
				scrollTimes = scrollTimes + 1;
			}
			getChange(scrollTimes);

		}
	} else if (e.detail) { //Firefox滑轮事件

		if (e.detail > 0) { //当滑轮向上滚动时
			if (scrollTimes <= 1) {
				scrollTimes = 1;
			} else {
				scrollTimes = scrollTimes - 1;
			}
			getChange(scrollTimes);
		}
		if (e.detail < 0) { //当滑轮向下滚动时
			if (scrollTimes >= 4) {
				scrollTimes = 4;
			} else {
				scrollTimes = scrollTimes + 1;
			}
			getChange(scrollTimes);
		}
	}
}