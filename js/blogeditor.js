var editor="";
window.onload=function(){
	editor = new Simditor({
  		textarea: $('#editor')
	});
	editor.setValue("<blockquote>aaaaaaa</blockquote>");
	var inBar=document.getElementById("inBar");
	inBar.style.width='296px';
	var bar=document.getElementById("loadBg");
	bar.style.display='none';
}

function saveFunc(){
	var details=editor.getValue();
	alert(details);	
}