var jiathis_config;
var weixinSiteId;
var weixinMemberId;
var shareUrlMark;
$(function() {
	/**
	* 标识批量上传的状态
	*/
	if(!uaredirect()){//PC端
//		$("#upload-type").show();
		$("#workSource").val("官网");
		//$("a[id='sharewenxin']").show();
	}else{
		$("#workSource").val("移动端");
		//$("a[id='sharewenxin']").hide();
	}
	
	//bootstrap轮播
//	$("#myCarousel").carousel('cycle');
	
	$('.popover-options').each(function(){
         $(this).find('a').popover({html : true });
    });
	
	$(".weizhi_1 a:last-child").css("color","#c90000");
	$(".weizhi2_2 a:last-child").css("color","#c90000");
	/**
	 * 限制分享故事的长度
	 */
	$("#workStory").change(function() 
	{    
		if($(this).val().length>200){ 
			$(this).val($(this).val().substring(0,200));
		}
		$("#workStoryNum").html($(this).val().length);
	}).keydown(function() 
	{    
		if($(this).val().length>200){ 
			$(this).val($(this).val().substring(0,200));
		}
		$("#workStoryNum").html($(this).val().length);
	}).keyup(function() 
	{    
		if($(this).val().length>200){ 
			$(this).val($(this).val().substring(0,200));
		}
		$("#workStoryNum").html($(this).val().length);
	});
	
	//监听大类组别，如果选中为青少组，隐藏释文
	$("input:radio[name='work-groups']").change(function (){
		if($("input[name='work-groups']:checked").val() == 'youth'){
			$("#workDesc").hide();
		}
	});
	
	//监听成人组小类组别
	$("input:radio[name='work-calligraphic']").change(function (){
		if($("input[name='work-calligraphic']:checked").val() == 'group_cao' || $("input[name='work-calligraphic']:checked").val() == 'group_zhuan'){
			$("#workDesc").show();
		}else{
			$("#workDesc").hide();
		}
	});

	$("#workSubmitForm").Validform({
	    ignoreHidden:true,
	    dragonfly:true,
	    showAllError:true,
	    postonce:true,
		datatype:{},
		beforeCheck:function(curform){
			//验证数据
			if(!checkGroup() || !checkFiles() || !checkDesc()){
				return false;
			}
			return true;
			
	    },
		beforeSubmit:function(curform){
			// 提交表单
			var options = {
				type : "post",
				success : function(msg) {
					//滚动条效果
					$("#progressbar").hide();
					//$(".btn btn-default").attr("disabled",false);
					var result = eval("(" + msg + ")");
					if (result.success != true) {
						if(result.messageErr == "timeout"){
							art.dialog({
								title: '提示',
								content: "会话超时，请重新登录!",
								lock: true,
								width: 200,
								okValue: '确定',
								ok: function () {
									window.location.href = "/eportal/ui?pageId=" + result.infoLoginPageIds;
								}
							});
						}else if(result.messageErr == "specialChar"){
							art.dialog({
								title: '提示',
								content: "提交信息包含非法字符!",
								lock: true,
								width: 200,
								okValue: '确定',
								ok: function () {}
							});
							
						}else if (result.success != true) {
							art.dialog({
								title: '提示',
								content: result.messageErr,
								lock: true,
								width: 200,
								okValue: '确定',
								ok: function () {
									window.location.reload();
								}
							});
						}
					}else {
						art.dialog({
							title: '提示',
							content: result.message,
							lock: true,
							width: 200,
							okValue: '确定',
							ok: function () {
								window.location.reload();
							}
						});
					}
				},
				error : function(msg) {
					//滚动条效果
					$("#progressbar").hide();
					art.dialog({
						title: '提示',
						content: "出错啦!",
						lock: true,
						width: 200,
						okValue: '确定',
						ok: function () {
						}
					});
				}
			};
			//滚动条
			//$(".btn btn-default").attr("disabled","disabled");
			$("#progressbar").show();
			$("#workSubmitForm").ajaxSubmit(options);
		},
		callback:function(data){
		   return false;
		}
	});
});

//点赞表单提交
function workPraise(id){
	$("#workId").val(id);
	// 提交表单
	var options = {
		type : "post",
		success : function(msg) {
			var result = eval("(" + msg + ")");
			if (result.success != true) {
				if(result.messageErr=='302'){
					window.location.href=result.loginPath;
				}else{
					art.dialog({
						title: '提示',
						content: result.messageErr+'',
						lock: true,
						width: 200,
						okValue: '确定',
						ok: function () {}
					});
				}
				
				
			}else {
				art.dialog({
					title: '提示',
					content: result.message+'',
					lock: true,
					width: 200,
					okValue: '确定',
					ok: function () {
						$("#workListForm").submit();
					}
				});
			}
		},
		error : function(msg) {
		}
	};
	$("#workPraiseForm").ajaxSubmit(options);
}

//分享表单提交
function workShare(id, shareTo){
	$("#shareWorkId").val(id);
	$("#extStr1").val(shareTo);
	// 提交表单
	var options = {
		type : "post",
		success : function(msg) {
			var result = eval("(" + msg + ")");
			if (result.success != true) {
				art.dialog({
					title: '提示',
					content: result.messageErr+'!',
					lock: true,
					width: 200,
					okValue: '确定',
					ok: function () {}
				});
	
			}
		},
		error : function(msg) {
			return false;
		}
	};
	$("#workShareForm").ajaxSubmit(options);
}

//分享表单提交
function deleteWorkInfo(id){
	$.MsgBox.Confirm("提示","确定删除该作品？",function(){
		$("#workId").val(id);
		// 提交表单
		var options = {
			type : "post",
			success : function(msg) {
				var result = eval("(" + msg + ")");
				if (result.success != true) {
					art.dialog({
						title: '提示',
						content: result.messageErr+'!',
						lock: true,
						width: 200,
						okValue: '确定',
						ok: function () {}
					});
					
				}else {
					art.dialog({
						title: '提示',
						content: result.message+'!',
						lock: true,
						width: 200,
						okValue: '确定',
						ok: function () {
							window.location.reload();
						}
					});
				}
			},
			error : function(msg) {
				return false;
			}
		};
		$("#workDeleteForm").ajaxSubmit(options);
	});
}

//验证组别
function checkGroup(){
	//获得作品组别选中的值
	var workgroups = $("input[name='work-groups']:checked").val();
	//成人组
	if("adult" == workgroups){
		if("undefined" == typeof($("input[name='work-calligraphic']:checked").val())){
			art.dialog({
			    title: '提示',
			    content: '"请选择作品书体"!',
			    lock: true,
			    width: 200,
			    okValue: '确定',
			    ok: function () {}
			});

			return false;
		}
	}else if("youth" == workgroups){//青少组
		if("undefined" == typeof($("input[name='work-ages']:checked").val())){
			art.dialog({
				title: '提示',
				content: '请选择年龄段!',
				lock: true,
				width: 200,
				okValue: '确定',
				ok: function () {}
			});
			return false;
		}
	}else{
		art.dialog({
			title: '提示',
			content: '请选择作品组别!',
			lock: true,
			width: 200,
			okValue: '确定',
			ok: function () {}
		});
		return false;
	}
	return true;
}
//验证附件
function checkFiles(){
//	var uploadtype = $("input[name='upload-type']:checked").val();
	var regfile=/\.jpg$|\.png$|\.JPG$|\.PNG$|\.jpeg$|\.JPEG$/;
//	if("single" == uploadtype){//单个作品
		var files=$("#inputfile").val();
		if(files==null||files==''){
			art.dialog({
				title: '提示',
				content: '请上传作品!',
				lock: true,
				width: 200,
				okValue: '确定',
				ok: function () {}
			});
			return false;
		}else if(!regfile.test(files)){
			art.dialog({
				title: '提示',
				content: '作品格式错误!',
				lock: true,
				width: 200,
				okValue: '确定',
				ok: function () {}
			});
			return false;
		}
//	}else{//多个作品
//		 //标识是否上传了附件
//		 var inputfile = false;
//		 var message = "";
//		 //首先判断是否上传了附件
//		 $("input[name='inputfile']").each(function(index){
//			  if($(this).val() != '') {//如果有附件
//				  inputfile = true;
//			  }
//		 });
//		 if(!inputfile){
//			 alert("请至少上传一个作品");
//			 return false;
//		 }
//		 //在判断附件格式是否正确
//		 $("input[name='inputfile']").each(function(index){
//			  if($(this).val() != '' && !regfile.test($(this).val())) {//如果有附件，并且格式错误
//				  message = message + "第" + (index + 1) + "个作品格式错误\n";
//			  }
//		 });
//		 if(message != ""){
//			 alert(message);
//			 return false;
//		 }
//	}
	return true;
}

//验证释文和小故事
function checkDesc(){
	var workgroup = $("input[name='upload-type']:checked").val();
	if(workgroup != "multiple"){
		//如果选择的是草书或者篆书，验证释文。
		if($("input[name='work-calligraphic']:checked").val() == 'group_cao' || $("input[name='work-calligraphic']:checked").val() == 'group_zhuan'){
			//获得释文的值
			var workdesc = $.trim($("#workDesc").val());
			//验证释文
			if(workdesc == '' || workdesc.length > 400){
				art.dialog({
					title: '提示',
					content: '请确保释文长度在1-400个字符!',
					lock: true,
					width: 200,
					okValue: '确定',
					ok: function () {}
				});
				return false;
			}
		}
		
		//获得分享故事的值
		var workstory = $.trim($("#workStory").val());
		//验证分享故事 200字以内
		if(workstory != '' && workstory.length > 200){
			art.dialog({
				title: '提示',
				content: '请确保分享故事长度不超过200个字符!',
				lock: true,
				width: 200,
				okValue: '确定',
				ok: function () {}
			});
			return false;
		}
	}
	return true;
}

//上传类型触发事件
//function upload_type(status){
//	if(status == 'true'){
//		$("#desc-div").hide();
//		$("#story-div").hide();
//		$("#batch-div").show();
//		$("#batch-button").hide();
//		$("#unbatch-button").show();
//	}else{
//		$("#desc-div").show();
//		$("#story-div").show();
//		$("#batch-div").hide();
//		$("#batch-button").show();
//		$("#unbatch-button").hide();
//	}
//}
//作品组别触发事件
function work_groups(status){
	if(status == 'adult'){
		$("#youth-ages").hide();
		$("#adult-calligraphic").show();
		$("#yaoqiu_adult").show();
		$("#yaoqiu_youth").hide();
	}else{
		$("#youth-ages").show();
		$("#adult-calligraphic").hide();
		$("#yaoqiu_youth").show();
		$("#yaoqiu_adult").hide();
	}
}
//分页跳转
function jumpToPage(currentPage){  
	var pageSize = $("#pageSize").val();
	var totalCount = $("#totalCount").val();
	if(currentPage > totalCount / pageSize){
		currentPage = Math.ceil(totalCount / pageSize);
	}
	$("#currentPage").val(currentPage);
	$("#workListForm").submit();
}
//导航栏切换
function navSwitch(worktype){  
	$("#currentPage").val(1);
	$("#workType").val(worktype);
	$("#workListForm").submit();
}
//手机版导航栏切换
function mobileNavSwitch(worktype){  
	$("#currentPage").val(1);
	$("#workType").val(worktype);
	$("#workGroup").val("");
	$("#workListForm").submit();
}
//面包线导航栏切换
function breadLineNavSwitch(workgroup){  
	$("#currentPage").val(1);
	$("#workGroup").val(workgroup);
	$("#workListForm").submit();
}
//分享功能
function getInfoida(domain,mobilePageId,workId,pic,pageId,moduleId){
	$('.popover-hide').popover('hide');

	$.ajax({
		type:"POST",
		url:"/eportal/ui?struts.portlet.mode=view&struts.portlet.action=/portlet/work-front!workShare.action&pageId="+pageId+"&moduleId="+moduleId,
		async:false,
		success:function(msg){
			var result = eval("(" + msg + ")");
			if (result.success != true) {
				if(result.messageErr=='302'){
					window.location.href=result.loginPath;
				}
			}else{
				weixinSiteId= result.siteId;
				weixinMemberId = result.memberId;
				shareUrlMark = result.shareUrlMark;
			}
		},
		error : function(msg) {
			return false;
		}
	});

	jiathis_config= {
			url : domain + "/eportal/ui?pageId="+mobilePageId+"&workId="+workId+"&weixinSiteId="+weixinSiteId+"&weixinMemberId="+weixinMemberId+"&shareUrlMark="+shareUrlMark,
			summary : "（分享自书法中国）",
			title : "自定义title",
			pic: domain + "/eportal/"+pic
	};
}

function GetObj(objName){
	if(document.getElementById){
		return eval('document.getElementById("'+objName+'")');
	}else{
		return eval('document.all.'+objName);
	}
}
function AutoPlay(){ //自动滚动
 clearInterval(AutoPlayObj);
 AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();',3000); //间隔时间
}
function ISL_GoUp(){ //上翻开始
 if(MoveLock) {
	 return;
 }
 clearInterval(AutoPlayObj);
 MoveLock = true;
 MoveTimeObj = setInterval('ISL_ScrUp();',Speed);
}
function ISL_StopUp(){ //上翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0){
  Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrUp(){ //上翻动作
 if(GetObj('ISL_Cont').scrollLeft <= 0){
	 GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth;
 }
 GetObj('ISL_Cont').scrollLeft -= Space ;
}
function ISL_GoDown(){ //下翻
 clearInterval(MoveTimeObj);
 if(MoveLock){
	 return;
 }
 clearInterval(AutoPlayObj);
 MoveLock = true;
 ISL_ScrDown();
 MoveTimeObj = setInterval('ISL_ScrDown()',Speed);
}
function ISL_StopDown(){ //下翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0 ){
  Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrDown(){ //下翻动作
 if(GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth){
	 GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;
 }
 GetObj('ISL_Cont').scrollLeft += Space ;
}
function CompScr(){
 var num;
 if(Comp == 0){
	 MoveLock = false;
	 return;
 }
 if(Comp < 0){ //上翻
  if(Comp < -Space){
   Comp += Space;
   num = Space;
  }else{
   num = -Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft -= num;
  setTimeout('CompScr()',Speed);
 }else{ //下翻
  if(Comp > Space){
   Comp -= Space;
   num = Space;
  }else{
   num = Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft += num;
  setTimeout('CompScr()',Speed);
 }
}

function resetPageNo(){
	$("#currentPage").val(1);
}

function resetSubmit(){
	$("#adult-calligraphic").show();
	$("#youth-ages").hide();
}

//js本地图片预览，兼容ie[6-9]、火狐、Chrome17+、Opera11+、Maxthon3  
function previewLocalImg(fileObj,imgPreviewId,divPreviewId){  
    var allowExtention=".jpg,.jpeg,.bmp,.gif,.png";//允许上传文件的后缀名document.getElementById("hfAllowPicSuffix").value;  
    var extention=fileObj.value.substring(fileObj.value.lastIndexOf(".")+1).toLowerCase();              
    var browserVersion= window.navigator.userAgent.toUpperCase();  
    if(allowExtention.indexOf(extention)>-1){   
        if(fileObj.files){//HTML5实现预览，兼容chrome、火狐7+等  
            if(window.FileReader){  
                var reader = new FileReader();   
                reader.onload = function(e){  
                    document.getElementById(imgPreviewId).setAttribute("src",e.target.result);  
                }    
                reader.readAsDataURL(fileObj.files[0]);  
            }else if(browserVersion.indexOf("SAFARI")>-1){  
            	art.dialog({
            		title: '提示',
            		content: '不支持Safari6.0以下浏览器的图片预览!',
            		lock: true,
            		width: 200,
            		okValue: '确定',
            		ok: function () {}
            	});
            }  
        }else if (browserVersion.indexOf("MSIE")>-1){  
            if(browserVersion.indexOf("MSIE 6")>-1){//ie6  
                document.getElementById(imgPreviewId).setAttribute("src",fileObj.value);  
            }else{//ie[7-9]  
                fileObj.select();  
                if(browserVersion.indexOf("MSIE 9")>-1)  
                    fileObj.blur();//不加上document.selection.createRange().text在ie9会拒绝访问  
                var newPreview =document.getElementById(divPreviewId+"New");  
                if(newPreview==null){  
                    newPreview =document.createElement("div");  
                    newPreview.setAttribute("id",divPreviewId+"New");  
                    newPreview.style.width = document.getElementById(imgPreviewId).width+"px";  
                    newPreview.style.height = document.getElementById(imgPreviewId).height+"px";  
                    newPreview.style.border="solid 1px #d2e2e2";  
                }  
                newPreview.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='" + document.selection.createRange().text + "')";                              
                var tempDivPreview=document.getElementById(divPreviewId);  
                tempDivPreview.parentNode.insertBefore(newPreview,tempDivPreview);  
                tempDivPreview.style.display="none";                      
            }  
        }else if(browserVersion.indexOf("FIREFOX")>-1){//firefox  
            var firefoxVersion= parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);  
            if(firefoxVersion<7){//firefox7以下版本  
                document.getElementById(imgPreviewId).setAttribute("src",fileObj.files[0].getAsDataURL());  
            }else{//firefox7.0+                      
                document.getElementById(imgPreviewId).setAttribute("src",window.URL.createObjectURL(fileObj.files[0]));  
            }  
        }else{  
            document.getElementById(imgPreviewId).setAttribute("src",fileObj.value);  
        }           
    }else{  
    	$.MsgBox.Alert("提示", "仅支持"+allowExtention+"为后缀名的文件!",null);  
        fileObj.value="";//清空选中文件  
        if(browserVersion.indexOf("MSIE")>-1){                          
            fileObj.select();  
            document.selection.clear();  
        }                  
        fileObj.outerHTML=fileObj.outerHTML;  
    }  
}  


