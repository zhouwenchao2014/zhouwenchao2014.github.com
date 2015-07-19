window.onload=function(){
	insertTime();
	var inBar=document.getElementById("inBar");
	inBar.style.width='296px';
	var bar=document.getElementById("loadBg");
	bar.style.display='none';
}
function insertTime(){
	var time=new Date();
	var hours=time.getHours();
	var minutes=time.getMinutes();
	var Seconds=time.getSeconds();	
	hours=changetime(hours);
	minutes=changetime(minutes);
	Seconds=changetime(Seconds);
	var times=document.getElementById("times");
	times.innerText=hours+":"+minutes+":"+Seconds;
	var weeknum=time.getDay();
	var weeks=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
	var months=['January', 'February', 'March', 'April' , 'May' ,'June' ,'July','August' ,'September' ,'October' ,'November' ,'December']
	var month=time.getMonth();
	var date=time.getDate();
	var week=document.getElementById("week");
	if(weeknum==0){
		weeknum=6;
	}else{
		weeknum=weeknum-1;
	}
	week.innerText=weeks[weeknum]+","+months[month]+" "+date;  
	var width=week.clientWidth;
	//alert(width);
	week.style.marginLeft=width;
	setTimeout("insertTime()",100);

    var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
    $.getScript(cityUrl, function(script, textStatus, jqXHR) {
        var citytq = remote_ip_info.city ;// 获取城市
        var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
        $.ajax({
            url : url,
            dataType : "script",
            scriptCharset : "gbk",
            success : function(data) {
                var _w = window.SWther.w[citytq][0];
                var _f= _w.f1+"_0.png";
                if(new Date().getHours() > 17){
                     _f= _w.f2+"_1.png";                
                }
                var weathersvg=new Map();
                weathersvg.set('阵雨','20');
                weathersvg.set('多云','8');
                weathersvg.set('中雨','18');
                weathersvg.set('小雨','17');
                weathersvg.set('晴','2');
                weathersvg.set('阴','14');
                weathersvg.set('雷阵雨','15');
                var picnum=weathersvg.get(_w.s1);
                // var weathersname=['阵雨','多云'];
                // var weathersvg={'阵雨':16,'多云':};
                var img = "<img style='width:40px;height:40px;color:white' src='img/SVG/"+picnum+".svg' />";

                var tq = citytq + " " + img + " " + _w.s1 + " " + _w.t1 + "<img style='width:40px;height:40px;color:white' src='img/SVG/46.svg' />" + _w.t2 + "<img style='width:40px;height:40px;color:white' src='img/SVG/46.svg' /> " + _w.d1 + _w.p1 + "级";
                var weather=document.getElementById("weather");
                weather.innerHTML=tq;
            }
        });
    });

}
function changetime(value){
	if(value<10){
		value="0"+value;
	}else{
		value=value;
	}
	return value;
}