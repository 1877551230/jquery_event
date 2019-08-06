//window.onload
$(function(e){
	//演示事件对象e,事件源对象e.target  添加事件     开始
	var $obj=$("<span>动态创建出来的span标签对象</span>");
	$("body").append($obj);
	$obj.css("cursor","pointer")
	    .click(function(e){
			alert(event.pageX+","+e.pageY);
			alert(e.target);
		});
	
	$("body").append("<br />");
	
	var $obj=$("<span>动态创建出来的span标签对象</span>");
	$("body").append($obj);
	$obj.css("cursor","pointer")
	    .bind("click",function(e){
			alert(event.pageX+","+e.pageY);
			alert(e.target);
		});
	
	$("body").append("<br />");
	
	//演示事件对象e,事件源对象e.target  添加事件     结束
	
	
	//演示事件冒泡开始
	$("#d1").click(function(e){
		alert("d1");
	});
	$("#d1 #d1_1").click(function(e){
		alert("d1_1");
	});
	$("#d1 #d1_1 #d1_1_1").click(function(e){
		alert("d1_1_1");
		e.stopPropagation();//取消事件冒泡
	});
	//演示事件冒泡结束
	
	//演示合并事件开始
	/*$(".s1").mouseenter(function(e){
		$(this).addClass("s2");
	});
	
	$(".s1").mouseleave(function(e){
		$(this).removeClass("s2");
	});*/
	
	$(".s1").hover(function(e){
		$(this).addClass("s2");
	},function(e){
		$(this).removeClass("s2");
	});
	//演示合并事件结束
	
	//模拟连续单击  开始
	$("#continueClick").click(function(e){
		$("#d2").toggle();
	});
	
	//模拟连续单击  结束
	
	//模拟操作   开始
	$("#btn2").click(function(){
		alert("触发btn2的按钮");
	});
	$("#btn1").click(function(){
		$("#btn2").trigger("click");
	});
	//模拟操作   结束
	
});







