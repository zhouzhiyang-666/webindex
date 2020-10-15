//图片轮播
function startMove(){
	var box=document.getElementById("box");
	if(box.offsetLeft<=-1*imgWidth*2){
		moveToStart();
	}else{
		moveToNext();
	}
}
//移动到上一张图片
function moveToStart(){
	box.style.left=0;
}
//移动到下一张图片
function moveToNext(){
	box.style.left=box.offsetLeft-imgWidth+"px";
}
function pic2(){
	imgWidth=240;//图片宽度
	var t2=setInterval(startMove,3000);
}
//显示切换按钮
function showButton(){
	document.getElementById("prev").style.display="block";
	document.getElementById("next").style.display="block";
}
//隐藏切换按钮
function hideButton(){
	document.getElementById("prev").style.display="none";
	document.getElementById("next").style.display="none";
}
function moveToPre(){
	box.style.left=box.offsetLeft+imgWidth*1.5+"px";
}
function moveToNext(){
	box.style.left=box.offsetLeft-imgWidth*1.5+"px";
}
window.onload=function(){pic2();}