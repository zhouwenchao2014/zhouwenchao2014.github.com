var scrollTimes = 1;
var colorlist=['#21B2A6','#505393','#6FBCCE','#15A0F5'];
var preValue="";
window.onload=function(){
	var a=document.getElementsByClassName("scrollpointer");
	a[0].style.backgroundColor="#FFAC0C";
	window.onmousewheel = scrollFunc;

	var inBar=document.getElementById("inBar");
	inBar.style.width='296px';
	var bar=document.getElementById("loadBg");
	bar.style.display='none';
}
function selectScoll(value){
	getChange(value.id);
}
function getChange(value){
	
	var first=document.getElementsByClassName("first");
	var secound=document.getElementsByClassName("secound");
	var third=document.getElementsByClassName("third");
	var four=document.getElementsByClassName("four");
	var body=document.getElementsByTagName("body");
	var list=[first,secound,third,four];
	var a=document.getElementsByClassName("scrollpointer");
	for(var i=0;i<list.length;i++){
		if(value==i+1){
			debugger
			if(preValue<value||preValue==""){
				if(i==0){
					body[0].style.backgroundColor=colorlist[0];
					preValue=value;
				}else{
					body[0].style.backgroundColor=colorlist[i-1];
					preValue=value;
				}
			}else{
				body[0].style.backgroundColor=colorlist[i+1];	
				preValue=value;
			}
			
			list[i][0].style.display="block";
			a[i].style.backgroundColor="#FFAC0C";
			debugger
		}else{
			list[i][0].style.display="none";
			a[i].style.backgroundColor="#FFDA93";
		}
	}
}

var scrollFunc = function(e) {
	var direct = 0;
	e = e || window.event;
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