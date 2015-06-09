window.onload=function(){
	var a=document.getElementsByClassName("scrollpointer");
	a[0].style.backgroundColor="#FFAC0C";
	debugger
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