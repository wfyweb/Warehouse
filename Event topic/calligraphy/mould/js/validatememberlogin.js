$.ajax({
	type:"POST",
	url:"/eportal/ui?struts.portlet.mode=view&struts.portlet.action=/portlet/work-front!validateMemberLogin.action&pageId=132108&moduleId=28ae4370b84b45e49d9a234ef49b3c44",
	async:false,
	data:{
	},
	success:function(data){
		var result =  eval("("+data+")");
		if(result == true){
			$("#loginbutton").attr("href","/eportal/ui?pageId=132268").text('个人中心');
			$("#regbutton").attr("href","javascript:void(0)").attr("onclick","memberLogout('/eportal/ui?struts.portlet.action=/app/member!logout.action&pageId=132256&moduleId=f8fe1450c2104246a45b76b33679f136')").attr("target","_self").text('退出');
		}else if(result == false){
            
		}else{
		}
	},
	error:function(data){
	}
});

function memberLogout(url) {
	$.ajax( {
		type : "post",
		url : url+"&downloadFileFlag=true",
		dataType : "text",
		success : function(msg) {
		    msg=eval("("+msg+")");
			if (msg.success) {
				showTipsDialog('退出成功！', 'okay');
				window.location.reload();
			} else {
				$.dialog.alert("退出出错啦！");
			}
		},
		error : function() {
			$.dialog.alert("退出出错啦！");
			flag = false;
		}
	});
}