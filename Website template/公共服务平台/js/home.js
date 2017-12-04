//姓名：wzw
//时间：2014/6/10 下午 16:49
//说点什么:其实写完后回头看代码，感觉就是坨屎，都不知在写什么，所以请不要看代码，也情不要修改代码，直接重写吧~~


	 window.onscroll = function(){
	 if(null!=document.body.scrollTop){
		 SetCookie("globalCookie", document.body.scrollTop);
	 }
	 }


	window.onresize = function(){
	    setPopupTop('pop_layer');
	};
	
window.onload=function(){
//alert(document.documentElement.clientWidth)
	sk();
	function sk(){
		var otxtKey=document.getElementById("txtKey");
		if(!otxtKey) return false;
		otxtKey.onkeydown=function(ev){
				var ev=ev||event;
				if(ev.keyCode==13){
					document.getElementById('searchBanner').submit();	
				}
				
		}
	
	}
		document.body.scrollTop=(null==Number(getCookie("globalCookie"))?0:Number(getCookie("globalCookie")));
 
 
 	//index_lrk 搜索
	//搜索 
    var lrk_oListTopL=document.getElementById("lrk_listTopL");
//	console.log(lrk_oListTopL);
	 lrk_aListLi=lrk_oListTopL.getElementsByTagName("li");
	lrk_aListLi[4].onmouseover=lrk_aListLi[5].onmouseover=function(){
		
		for(var i=0;i<lrk_aListLi.length-2;i++){
			lrk_aListLi[i].style.display="none";
	
		}
		lrk_aListLi[5].style.display="block";
		startMove(lrk_aListLi[5],{width:240})
	}
	
	lrk_aListLi[4].onmouseout=lrk_aListLi[5].onmouseout=function(){
		
		startMove(lrk_aListLi[5],{width:0},function(){
			lrk_aListLi[5].style.display="none";
			for(var i=0;i<lrk_aListLi.length-2;i++){
				lrk_aListLi[i].style.display="block";	
				
			}	
		})
	}	



	//搜索
	/*var oListTopL=document.getElementById("listTopL");
	var aListLi=oListTopL.getElementsByTagName("li");
	aListLi[3].onmouseover=aListLi[4].onmouseover=function(){
		for(var i=0;i<aListLi.length-2;i++){
			aListLi[i].style.display="none";	
		}
		aListLi[4].style.display="block";
		startMove(aListLi[4],{width:321})
	}
	
	aListLi[3].onmouseout=aListLi[4].onmouseout=function(){
		
		startMove(aListLi[4],{width:0},function(){
			aListLi[4].style.display="none";
			for(var i=0;i<aListLi.length-2;i++){
				aListLi[i].style.display="block";	
			}	
		})
	}
*/

	
	//listUp
	listUp();
	function listUp(){
		var oListUp=document.getElementById("listUp");
		var aListP=oListUp.getElementsByTagName("p");
		var iNow=0;
		
		tswtch();
		oListUp.onmouseover=function(){
			clearInterval(timer3)	
		}
		oListUp.onmouseout=function(){
				tswtch()
		}
		
		function tswtch(){
			timer3=setInterval(function(){
			  iNow++;
				  
			  if(iNow==aListP.length){
				  iNow=0;	
			  }
			  
			  startMove(oListUp,{top:-aListP[0].offsetHeight*iNow})
			},3000)	
		}
	}
	mapclick()
	function mapclick(){
	var s1=getClass(document,"mapList")[0];
	if(!s1) return false;	
	var aLi=s1.getElementsByTagName("li");
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className="";	
				}
				this.className="on"
			}
		}
		
	}
	//banner
	banner()
	function banner(){
		var oCont=document.getElementById("content");
		if(!oCont) return false;
		var oBanner=oCont.getElementsByTagName("ul")[0];
		var oBannerLi=oBanner.getElementsByTagName("li");
	
		var oBtn_left=getClass(oCont,"btn_left")[0];
		var oBtn_right=getClass(oCont,"btn_right")[0];
		if(!oBtn_right) return false;
		var iNot=0;
		oCont.onmouseover=function(){
			oBtn_left.style.display="block";
			oBtn_right.style.display="block";
			startMove(oBtn_left,{opacity:100});	
			startMove(oBtn_right,{opacity:100});	
		}
		oCont.onmouseout=function(){
	
			startMove(oBtn_left,{opacity:0},function(){
				oBtn_left.style.display="none";	
			});	
			startMove(oBtn_right,{opacity:0},function(){
				oBtn_right.style.display="none";		
			});	
		}
		oBtn_right.onclick=function(){
			iNot++;	
			if(iNot==oBannerLi.length){
				iNot=0	
			}
			for(var i=0;i<oBannerLi.length;i++){
				startMove(oBannerLi[i],{opacity:0});
			}
				startMove(oBannerLi[iNot],{opacity:100});
		}
		
		oBtn_left.onclick=function(){
			iNot--;	
			if(iNot<0){
				iNot=oBannerLi.length-1
			}
			for(var i=0;i<oBannerLi.length;i++){
				startMove(oBannerLi[i],{opacity:0});
			}
				startMove(oBannerLi[iNot],{opacity:100});
		}	
	}
	h1156();
	function h1156(){
		var oH1156=document.getElementById("h1156");
		if(!oH1156) return false;
		var aLi=oH1156.getElementsByTagName("li");
		for(var i=0;i<aLi.length;i++){
			if(aLi[i].className=="on"){
				var oImg=aLi[i].getElementsByTagName("img")[0];
					oImg.src='images/yr'+(i+1)+'.png'
			}
		}
		
	}
	//证件号码类别
	cs();
	function cs(){
		var oZhengj=document.getElementById("zhengj");
		if(!oZhengj) return false;
		var oChangeBox=getClass(oZhengj,"changeBox")[0];
		var oChangeS=getClass(oZhengj,"changeS")[0];
		var oListJunr=getClass(oZhengj,"listJunr")[0];
		var oLis=getClass(oZhengj,"lis")[0];

		
		var oListJunrLi=oListJunr.getElementsByTagName("li");
		var bBtnB=true;
		oChangeS.onclick=function(ev){
				var ev=ev||event;
				oListJunr.style.display="block";	
				ev.cancelBubble=true;			
		}
		for(var i=0;i<oListJunrLi.length;i++){
			oListJunrLi[i].index=i;
			oListJunrLi[i].onclick=function(ev){
				oChangeBox.innerHTML=this.innerHTML;
				oLis.value= this.attributes&&this.attributes[0].value==null?this.innerHTML:this.attributes[0].value;	
				oListJunr.style.display="none";
				bBtnB=true;
			}	
		}
		document.onclick=function(){
			oListJunr.style.display="none";	
		}
	}
	
	getCompNav()
	function getCompNav(){
		var oNav_cont=getClass(document,"nav_cont")[0];
		if(!oNav_cont) return false;
		var aLi=oNav_cont.getElementsByTagName("li");
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.width=100/aLi.length-0.05+"%";	
		}
		
	}
	
	
	/*nav*/
	/*var gunTab=0;
	nav("footNav","navTop",gunTab)
	nav("footNav","alongpaNav",gunTab);	
	window.onresize=function(){		
			nav("footNav","navTop",gunTab);	
			nav("footNav","alongpaNav",gunTab);	
	}*/
	function nav(id,iClass,sunpos){
		var footNav=document.getElementById(id);
		var oNavTop=getClass(footNav,iClass)[0];
		if(!oNavTop) return false;
		var oNavTopLi=oNavTop.getElementsByTagName("li");
		var aNav_list=getClass(footNav,"nav_list");
		var iNow=sunpos;
		var bBtn=true;
		var timerOut=null;
		tabfn(iNow)
		for(var i=0;i<oNavTopLi.length;i++){
					oNavTopLi[i].className="";
		}
		oNavTopLi[iNow].className="on";
		for(var i=0;i<oNavTopLi.length;i++){
			oNavTopLi[i].index=i;
			
			oNavTopLi[i].onclick=function(){
				gunTab=this.index;
				if(this.index==iNow) return;
				aNav_list[0].style.marginLeft="0";
				aNav_list[0].style.left="2000px";
				
				tabfn(this.index)
				for(var i=0;i<oNavTopLi.length;i++){
					oNavTopLi[i].className="";
				}
				oNavTopLi[this.index].className="on";
				
			}	
		}
		
		
		
		function tabfn(Nps){
			var keshi=parseInt((document.documentElement.clientWidth-aNav_list[0].offsetWidth)/2)+20;					
				startMove(aNav_list[iNow],{left:-2000})
				startMove(aNav_list[Nps],{left:keshi});
				iNow=Nps;		
		}
	
	}
	if(document.body.offsetHeight<document.documentElement.clientHeight){
		huoqu("header","content","footNav","footer");
	}
	bingEvent(window,"resize",function(){
		huoqu("header","content","footNav","newClass");	
	})
	huoqu("header","content","footNav","newClass");
	function huoqu(id1,id2,id3,iclass){
			var oId1=document.getElementById(id1);
			var oId2=document.getElementById(id2);
			var oId3=document.getElementById(id3);
			var newCla=getClass(document,iclass)[0];
			if(!newCla) return;
		oId2.style.height=(document.documentElement.clientHeight-oId1.offsetHeight-oId3.offsetHeight-newCla.offsetHeight-1)+"px";
			
	}
	//
	imks();
	function imks(){
		setTimeout(function(){
			var a__seadragon=getClass(document,"__seadragon");
			if(!a__seadragon) return;
			for(var i=0;i<a__seadragon.length;i++){
				kkOne(a__seadragon[i]);	
			}
			
		function kkOne(obj){
			var aDiv=obj.getElementsByTagName("div");
			aDiv[aDiv.length-1].style.display="none";	
		}
		},1000)
			
	}
	
	

	//move list
		moveList();
		function moveList(){
			if($("#alongpage").length > 0){
				var oDiv=document.getElementById("alongpage");
				var nav_cont=getClass(oDiv,"nav_cont")[0];
				var guohua=getClass(oDiv,"guohua")[0];
				if(!nav_cont||!oDiv||!guohua) return false;
				var oSpan=guohua.getElementsByTagName("span")[0];
				var aA=oSpan.getElementsByTagName("a")
				var aLi=nav_cont.getElementsByTagName("li");
				
				for(var i=0;i<aLi.length;i++){
					if(aLi[i].className=="on"){
						
						oSpan.style.left=aLi[i].offsetLeft-guohua.offsetLeft+"px";
						oSpan.style.width=aLi[i].offsetWidth+"px";
					}
					
				}
			}	
			
		}
		
/*滚轮*/
	gunl()
	function gunl(){
		
	var oXieyi=document.getElementById("xieyi");
	if(!oXieyi) return false;
	var bi=true;
	var str='<dl class="dl"><dt>一、总 则</dt><dd> 1.1 银川数字文化网的所有权和运营权归银川市政府所有。</dd><dd>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与银川数字文化网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 </dd><dd>1.3 本协议则可由银川数字文化网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。 </dd></dl><dl class="dl"><dt>一、总 则</dt><dd> 1.1 银川数字文化网的所有权和运营权归银川市政府所有。</dd><dd>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与银川数字文化网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 </dd><dd>1.3 本协议则可由银川数字文化网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</dl>	<dl class="dl"><dt>一、总 则</dt><dd> 1.1 银川数字文化网的所有权和运营权归银川市政府所有。</dd><dd>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与银川数字文化网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 </dd><dd>1.3 本协议则可由银川数字文化网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</dl><dl class="dl"><dt>一、总 则</dt><dd> 1.1 银川数字文化网的所有权和运营权归银川市政府所有。</dd><dd>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与银川数字文化网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 </dd><dd>1.3 本协议则可由银川数字文化网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</dl>'
	var str1='<form><span class="inputTitle">输入邮箱地址：</span><div class="rBox w364"><input class="wenConeet" type="text" /><input class="submitD" type="submit" /></div></form>'
	var str2='<p class="chongzhi">修改密码</p>';
	var str3='<h3 class="chakan">请查看您的邮件</h3><p class="ddL">验证邮件已发送  登陆您的邮箱 <em>Xusanduo@163.com</em> 查收来自银川数字文化网的验证邮件</p>'
	var str4='<p class="chnw">您已成功注册用户为   <em>Xusanduo</em></p><p class="mt21">请查看您的邮件</p><p class="ddL">验证邮件已发送  登陆您的邮箱 <em>Xusanduo@163.com</em> 查收来自银川数字文化网的验证邮件</p>'
	oXieyi.onclick=function(ev){
		var ev=ev||event;
		var p1=new Wheel();
			p1.init({
				iNow:1,//列表号，为了区分是点击哪个层
				oParnet:"userAgreement",// id 表示在哪个元素下面操作这些东西
				gunl:true,   //是否有滚动条 true是有
				title: "www", //标题
				juzhong:"", //标题是否居中 center居中留空默认向左
				value:str,//留空表示内容为空
				w:720,
				h:414,
				zuozhe:"代理人",
				conentent:"我是内容",//wzw==true的内容
				imgSrc:"images/dabg.jpg",//wzw==true的地址
				wzw:true//开启另外一套皮肤
 			})	
			ev.cancelBubble =true;
			
	}
	}
	
	
}
/*滚轮组件*/
function Wheel(){
	this.t=10;
	this.objDiv=null;
	this.ball_y_bg=null;
	this.Wheelobj=null;	
	this.disY=0;
	this.disX=0;
	this.setting={
		dir:"center",
		contentId:"w599",
		gunlId:"h182",
		iClass:"ball_y_bg",
		w:756,
		h:640,
		gunl:false,
		title:"",
		juzhong:"left",
		value:"",
		zuozhe:"",
		wzw:false
	}	
}
Wheel.prototype.json={};
Wheel.prototype.init=function(opt){
		extend(this.setting,opt)	
		var _this=this;
		if( this.json[opt.iNow] == undefined ){
			this.json[opt.iNow] = true;
		}
		if(this.json[opt.iNow]){
			if(this.setting.wzw){
				this.create();
				var _this=this;	
				this.Wheelobj=document.getElementById(this.setting.oParnet);
				this.daImg=getClass(this.Wheelobj,"daImg")[0];
				this.listAddLi=getClass(this.Wheelobj,"listAdd")[0].getElementsByTagName("a");
				this.oTitle=getClass(this.Wheelobj,"title")[0];
				this.Wheelobj.style.height=this.setting.h+"px";
				this.Wheelobj.style.width=this.setting.w+"px";	
				var l=this.listAddLi;
				this.Wheelobj.onmouseover=function(){
						 startMove(_this.oTitle,{top:0});
				}
				this.Wheelobj.onmouseout=function(){					
						 startMove(_this.oTitle,{top:-80});
				}
				this.daImg.onmousedown=function(ev){
					startMove(_this.oTitle,{top:-80});
					clearInterval(_this.daImg.timer);
					var ev=ev||event;
					_this.disX=ev.clientX;
					_this.disY=ev.clientY;	
					var oLeft=_this.daImg.offsetLeft;
					var oTop=_this.daImg.offsetTop;
					//alert(_this.disX)
					document.onmousemove=function(ev){
						
						var ev=ev||event;
						var l=ev.clientX-_this.disX+oLeft;
						var t=ev.clientY-_this.disY+oTop;
						if(l>0){
							l=0;
						}else if(l<_this.Wheelobj.offsetWidth-_this.daImg.offsetWidth){
							l=_this.Wheelobj.offsetWidth-_this.daImg.offsetWidth;
						}
						if(t>0){
							t=0;
						}else if(t<_this.Wheelobj.offsetHeight-_this.daImg.offsetHeight){
							t=_this.Wheelobj.offsetHeight-_this.daImg.offsetHeight;
						}
						_this.daImg.style.left=l+"px";
						
						_this.daImg.style.top=t+"px";
					}
					document.onmouseup=function(){
						document.onmousemove=document.onmouseup=null;	
						startMove(_this.oTitle,{top:0});
					}
					return false;
				}
			
				l[0].onclick=function(){
					var shuzi=200;
					var w=_this.daImg.offsetWidth;
					var h=_this.daImg.offsetHeight;
					var mgL=parseInt(_this.daImg.offsetLeft);
					var mgT=parseInt(_this.daImg.offsetTop);
					if(1440<w){
						return
					}
					if(828<h){
						return
					}
					_this.daImg.style.width=w+shuzi+"px";
					_this.daImg.style.height=h+shuzi/2+"px";
					_this.daImg.style.left=-shuzi/2+mgL+"px";
					_this.daImg.style.top=-shuzi/4+mgT+"px";
					//startMove(_this.daImg,{width:w+shuzi,height:h+shuzi/2,left:-shuzi/2+mgL,top:-shuzi/4+mgT});
				}
				l[1].onclick=function(){
					var shuzi=-200;
					var w=_this.daImg.offsetWidth;
					var h=_this.daImg.offsetHeight;
					var mgL=parseInt(_this.daImg.offsetLeft);
					var mgT=parseInt(_this.daImg.offsetTop);
					var l=-shuzi/2+mgL;
					var t=-shuzi/4+mgT;
					if(720>=w){
						w=720;
						return 
					}
					if(414>=h){
						h=414;
					}
						
						
					_this.daImg.style.width=w+shuzi+"px";
					_this.daImg.style.height=h+shuzi/2+"px";
						if(l>0){
							l=0;
						}else if(l<_this.Wheelobj.offsetWidth-_this.daImg.offsetWidth){
	
							l=_this.Wheelobj.offsetWidth-_this.daImg.offsetWidth;
						}
						if(t>0){
							t=0;
						}else if(t<_this.Wheelobj.offsetHeight-_this.daImg.offsetHeight){
							t=_this.Wheelobj.offsetHeight-_this.daImg.offsetHeight;
						}
					_this.daImg.style.left=l+"px";
					_this.daImg.style.top=t+"px";
					//startMove(_this.daImg,{width:w+shuzi,height:h+shuzi/2,left:-shuzi/2+mgL,top:-shuzi/4+mgT});

				}
				l[2].onclick=function(){
					/*document.body.style.overflow="hidden";
					var oHtml=document.getElementById("html");
					oHtml.style.overflow="hidden";*/
					
					
				}
				
			}else{
				this.create();	
				this.Wheelobj=document.getElementById(this.setting.oParnet);
				this.contentId=document.getElementById(this.setting.contentId);
				this.oH182=document.getElementById(this.setting.gunlId);
				this.ball_y_bg=getClass(this.oH182,"ball_y_bg")[0];
				this.oPd20=getClass(this.Wheelobj,"pd20")[0];
				this.oTitle=getClass(this.Wheelobj,"title")[0];
				this.Wheelobj.style.height=this.setting.h+"px";
				this.Wheelobj.style.width=this.setting.w+"px";			
				this.oPd20.style.height=this.Wheelobj.offsetHeight-this.oTitle.offsetHeight+"px";
				this.oH182.style.height=this.oPd20.offsetHeight-34+"px";
				if(!this.setting.gunl){
				  this.oH182.style.display="none";
				}
				 if(this.contentId.offsetHeight<this.oPd20.offsetHeight){
					  this.oH182.style.display="none";
				 }else{
					this.ball_y_bg.style.height=this.oH182.offsetHeight-(this.contentId.offsetHeight-this.oPd20.offsetHeight)/this.oH182.offsetHeight*this.oH182.offsetHeight+"px";	 
				 }
				 
				 this.ball_y_bg.onmousedown=function(ev){
					var ev=ev||event;
					_this.fnDown(ev);
					document.onmousemove=function(ev){
						var ev=ev||event;
						_this.fnMove(ev);
					}
					document.onmouseup=function(){
						document.onmousemove=document.onmouseup=null;	
					}
					return false;
				}
				this.mousegl();
			}
		
			
			window.onresize=window.onscroll=function(){
				
				startMove(_this.Wheelobj,{left:parseInt((vilibleWidth()-_this.setting.w)/2),top:parseInt((vilibleHeight()-_this.setting.h)/2+scrollTop())})
			}
			if(this.setting.dir=="center"){
				startMove(this.Wheelobj,{left:parseInt((vilibleWidth()-this.setting.w)/2),top:parseInt((vilibleHeight()-this.setting.h)/2+scrollTop())})
			}
			
			
			if(this.setting.juzhong=="center"){
				var oH2=this.contentId.getElementsByTagName("h2")[0];
				oH2.style.cssText="padding-left:0;text-align:center;"	
			}
			this.cloesMak();				
			
			this.json[opt.iNow] = false;
		}
		
		
}
Wheel.prototype.mousegl=function(){
	bingEvent(this.oPd20,"mousewheel",whell)
	bingEvent(this.oPd20,"DOMMouseScroll",whell)
	var _this=this;
	function whell(ev){
		var ev=ev||event;
		var bBtn=true;
		bBtn=ev.detail?ev.detail<0?true:false:ev.wheelDelta>0?true:false;
		if(bBtn){
			_this.t-=20;			
		}else{
			_this.t+=20;			
		}
		if(_this.t<0){
			_this.t=0	
		}else if(_this.t>_this.oH182.offsetHeight-_this.ball_y_bg.offsetHeight){
			_this.t=_this.oH182.offsetHeight-_this.ball_y_bg.offsetHeight
		}
		_this.tarGet(_this.t);
		
		if(ev.preventDefault){
			ev.preventDefault();	
		}
		return false;
	}
}
Wheel.prototype.fnMove=function(ev){
		this.t=ev.clientY-this.disY;
		if(this.t<0){
			this.t=0	
		}else if(this.t>this.oH182.offsetHeight-this.ball_y_bg.offsetHeight){
			this.t=this.oH182.offsetHeight-this.ball_y_bg.offsetHeight
		}
		this.tarGet(this.t);
}
Wheel.prototype.tarGet=function(t){
		
		var pro=t/(this.oH182.offsetHeight-this.ball_y_bg.offsetHeight);
		this.contentId.style.top=(this.oPd20.offsetHeight-this.contentId.offsetHeight)*pro+"px";
		this.ball_y_bg.style.top=this.t+"px";
}
Wheel.prototype.fnDown=function(ev){
	this.disY=ev.clientY-this.ball_y_bg.offsetTop;
	
}
Wheel.prototype.cloesMak=function(){
	var _this=this;
	var cloes=this.Wheelobj.children[0].getElementsByTagName("span")[0];
	cloes.onclick=function(){
		document.body.removeChild(_this.objDiv)	
		document.body.removeChild(_this.oBody)	
		_this.json[_this.setting.iNow]=true;
	}
}
Wheel.prototype.create=function(){
	this.objDiv=document.createElement("div");
	this.objDiv.id="userAgreement";
	this.objDiv.className="userAgreement";
	this.oBody=document.createElement("div");
	this.oBody.id="body";
	this.oBody.style.width=document.body.offsetWidth+"px";
	this.oBody.style.height=document.body.offsetHeight+"px";
	if(this.setting.wzw){
		this.objDiv.innerHTML='<div class="title title1"><div class="cle"><h2 class="l wap">'+this.setting.title+'</h2><em class="zuozhe">作者：<i>代理人</i></em><span></span></div><p class="contenA">'+this.setting.conentent+'</p></div><img class="block daImg" src='+this.setting.imgSrc+' /><div class="listAdd"><a href="javascript:" class="add"></a><a href="javascript:" class="yo"></a><a href="javascript:" class="qPler"></a></div></div>';
		if(this.setting.zuozhe){
			getClass(this.objDiv,"zuozhe")[0].innerHTML='作者：<i>'+this.setting.zuozhe+'</i>';	
		}else{
			getClass(this.objDiv,"zuozhe")[0].style.display="none";	
		}
	}else{
		this.objDiv.innerHTML='<div class="title yanse"><span></span></div><div class="pd20 cle"><div class="pr"><div id="w599" class="w599"><h2 class="yhxy">'+this.setting.title+'</h2><div class="pd12">'+this.setting.value+'</div></div></div><div id="h182" class="w13"><div class="scroll_top_normal"></div><div class="ball_y_bg"></div><div class="scroll_bottom_normal"></div></div></div>'
	}
	
	document.body.appendChild(this.objDiv);
	document.body.appendChild(this.oBody);
	
}
Wheel.prototype.createWzw=function(){
		
}



/*滚轮组件 end*/

function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr]=obj2[attr]	
	}
}
/*获取class*/
function getClass(oParent,iClass){
		var aEle=oParent.getElementsByTagName("*");
		var arr=[];
		var re=new RegExp('\\b'+iClass+'\\b','i');
		for(var i=0;i<aEle.length;i++){
			if(re.test(aEle[i].className)){
				arr.push(aEle[i])	
			}	
		}
		return arr;
}
function getPos(obj){
	var pos={left:0,top:0};
	while(obj){
		pos.left+=obj.offsetLeft;	
		pos.top+=obj.offsetTop;	
		obj=obj.offsetParent
	}
	return pos;
}

function vilibleHeight(){
	return document.documentElement.clientHeight;	
}
function vilibleWidth(){
	return document.documentElement.clientWidth;	
}
function scrollTop(){
	return document.body.scrollTop||document.documentElement.scrollTop;	
}
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	var	iCor=0;
	obj.timer=setInterval(function(){
			var bTrue=true;
			for(var attr in json){			
				
				if(attr=="opacity"){
					iCor=Math.round(css(obj,"opacity")*100);
			
				}else{
					iCor=parseInt(css(obj,attr))?parseInt(css(obj,attr)):0;	
				}				
				
				var iSpeed=(json[attr]-iCor)/7;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				if(iCor!=json[attr]){
					bTrue=false;
				}
				if(attr=="opacity"){
					obj.style.opacity=(iCor+iSpeed)/100;
					obj.style.filter='alpha(opacity:'+(iCor+iSpeed)+')';
				}else{
					obj.style[attr]=iSpeed+iCor+"px";
				}
					
			}
			if(bTrue){
				clearInterval(obj.timer);
				if(fn)
				{
					fn.call(obj);
				}
			}			
	},30)
}
function css(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];	
	}else{
		return getComputedStyle(obj,false)[attr];	
	}
}
function bingEvent(obj,iEvent,fn){
	if(obj.attachEvent){
		obj.attachEvent("on"+iEvent,fn)	
	}else{
		obj.addEventListener(iEvent,fn,false);
	}
}


function SetCookie(name,value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}
function delCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//app二维码显示隐藏
	function app_over(){
		var lrk_app=document.getElementById("app_code");
lrk_app.style.display="block";
		}
	function app_out(){
		var lrk_app=document.getElementById("app_code");
		lrk_app.style.display="none";
		}
function show(){
		var h=document.getElementById("l_hidden");
		h.style.display="block";
		var l_footbg=document.getElementById("l_footbg");
		l_footbg.style.top="-168px";
		//h.style.backgroundImage="url(../images/foobg_03.png)";
		document.getElementById("1Bg").style.zIndex="2";
		}
	function cr(){
		var hh=document.getElementById("l_hidden");
		hh.style.display="none";
		var l_footbg=document.getElementById("l_footbg");
		l_footbg.style.top="-3px";
	}	
	
	
	/*活动预定*/
	function showBookPop(url, objw){
	    if($('#pop_layer_bg').length <= 0){
	        $('body').append('<div id="pop_layer_bg" style="display: none;"></div>');
	    }else{
	        $('#pop_layer_bg').css('display', 'none');
	    }
		var layerW = objw ? objw : 540;
	    $("#pop_layer_bg").append('<div id="pop_layer" style="width:'+ layerW +'px;"><iframe style="background-color:transparent;" allowtransparency="true" id="show_login" frameborder="0" scrolling="yes" width="100%" height="100%" ></iframe></div>');
		
	    load();
	    var iframe;
		
	    /*iframe加载事件*/
	    function load() {
	        iframe = document.getElementById("show_login");
	        iframe. onload = iframe. onreadystatechange = iframeload;
	        iframe.src = url;
	    }
	    /*判断iframe是否加载完成，加载完成之后iframe显示*/
	    function iframeload() {
	        if (!iframe.readyState || iframe.readyState == "complete") {
	            $('#pop_layer_bg').css('display', 'block');
	            iframe.style.display = 'block';
	            iFrameHeight();

	        }
	    }
	    /*获取iframe的高度*/
	    function iFrameHeight() {
	        var ifm= document.getElementById("show_login");
	        var subWeb = document.frames ? document.frames["show_login"].document : ifm.contentDocument;
	        /*console.log(document.frames);
	        console.log(document.frames["show_login"].document);
	        console.log(ifm.contentDocument);*/
	        if(ifm != null && subWeb != null) {
	            ifm.height = subWeb.body.scrollHeight;
	        }
	        setPopupTop('pop_layer');
	    }
	}
	
	/*设置弹出框的位置*/
	function setPopupTop(cls){
	    var obj = $('#'+cls);
	    var objTop = parseInt(($(window).height() - $(obj).height())/2);
		var objLeft = parseInt(($(window).width() - $(obj).width())/2);
	    obj.css('height', $(obj).height());
	    if(objTop > 0){
	        obj.css('top', objTop);
	    }else{
	        obj.css('top', '0px');
	    }
		if(objLeft > 0){
	        obj.css('left', objLeft);
	    }else{
	        obj.css('left', '0px');
	    }
	}
	
	/*预约*/
	function showDialogPop(url, objw){
	    if($('#pop_layer_bg').length <= 0){
	        $('body').append('<div id="pop_layer_bg" style="display: block;"></div>');
	    }else{
	        $('#pop_layer_bg').css('display', 'block');
	    }
	    var layerW = objw ? objw : 540;
	    $("#pop_layer_bg").append('<div id="pop_layer" style="width:'+ layerW +'px;"><iframe style="background-color:transparent;" allowtransparency="true" id="show_login" frameborder="0" scrolling="yes" width="100%" height="100%" src="'+ url +'" ></iframe></div>');
	    $('#tour_body').css({overflow:"hidden"});
	    
	    load();
	    var iframe;
		
	    /*iframe加载事件*/
	    function load() {
	        iframe = document.getElementById("show_login");
	        iframe. onload = iframe. onreadystatechange = iframeload;
	        iframe.src = url;
	    }
	    /*判断iframe是否加载完成，加载完成之后iframe显示*/
	    function iframeload() {
	        if (!iframe.readyState || iframe.readyState == "complete") {
	            $('#pop_layer_bg').css('display', 'block');
	            iframe.style.display = 'block';
	            iFrameHeight();

	        }
	    }
	    /*获取iframe的高度*/
	    function iFrameHeight() {
	        var ifm= document.getElementById("show_login");
	        var subWeb = document.frames ? document.frames["show_login"].document : ifm.contentDocument;
	        /*console.log(document.frames);
	        console.log(document.frames["show_login"].document);
	        console.log(ifm.contentDocument);*/
	        if(ifm != null && subWeb != null) {
	            ifm.height = subWeb.body.scrollHeight;
	        }
	        setPopupTop('pop_layer');
	    }
	}
	
	/*设置弹出框的位置*/
	function setPopupTop(cls){
	    var obj = $('#'+cls);
	    var objTop = parseInt(($(window).height() - $(obj).height())/2);
		var objLeft = parseInt(($(window).width() - $(obj).width())/2);
	    obj.css('height', $(obj).height());
	    if(objTop > 0){
	        obj.css('top', objTop);
	    }else{
	        obj.css('top', '0px');
	    }
		if(objLeft > 0){
	        obj.css('left', objLeft);
	    }else{
	        obj.css('left', '0px');
	    }
	}
	
	
