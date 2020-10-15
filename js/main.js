function pics1(){
	var myimg=document.getElementById("ad");
	if(myimg.src.match("temp/c1.png")){
		myimg.src="temp/c2.png"
	}else if(myimg.src.match("temp/c2.png")){
		myimg.src="temp/c3.png"
	}else if(myimg.src.match("temp/c3.png")){
		myimg.src="temp/c4.png"
	}else{
		myimg.src="temp/c1.png"
	}
}
function exctPic1(){
	var t=setInterval(pics1,3000); //设置定时，每2s更换一次图片
	var lis=document.getElementById("btn").getElementsByTagName("li");
	var myimg=document.getElementById("ad");
	for(var i=0;i<lis.length;i++){
		lis[i].onmousemove=function(){
			console.log("1");
			clearInterval(t);//关闭定时器
			for(var i=0;i<lis.length;i++){
				if(lis[i]==this){
					myimg.src="temp/c"+(i+1)+".png";
				}
			}
		}
		lis[i].onmouseout=function(){
			var t=setInterval(pics1,3000); //启动定时器，恢复定时
		}
	}
}
window.onload=function(){exctPic1();}