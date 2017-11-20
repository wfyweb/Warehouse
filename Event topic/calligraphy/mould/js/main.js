// JavaScript Document
function Move(nW,n,nInd,oMain,oLeft,oLeftClass,oRight,oRightClass)
	{
		this.nW = nW;//产品外加宽度（包括边框，内外边距）,如果没有，nW=0
		this.n = n;//为了满足网上服务2排产品情况，如果为1排，n=1
		this.nWidth = oMain.find('li').width() + this.nW;//每个产品宽度
		this.nLen = oMain.find('li').length;//产品长度
		this.nInd = nInd;//每屏产品数
		this.nSpeed = 1;//当前为第一屏
		this.nNum = Math.ceil(this.nLen / this.nInd);
		this.nDis = (this.nWidth*this.nInd)/this.n;
		this.oMain = oMain;
		this.oLeft = oLeft;
		this.oLeftClass = oLeftClass;
		this.oRight = oRight;
		this.oRightClass = oRightClass;
		if(this.nNum > 1){oRight.addClass(oRightClass);}
		//oMain.width((this.nWidth*this.nLen)/this.n);
		oMain.width(this.nWidth* Math.ceil(this.nLen/2));
	}
	Move.prototype.LeftMove = function()
	{
		if(this.nSpeed > 1)
		{
			//this.oMain.stop().animate({marginLeft:"+="+this.nDis+"px"},500);
			this.oMain.stop().css({marginLeft:"+="+this.nDis+"px"});
			this.oRight.addClass(this.oRightClass);
			this.nSpeed--;
		}if(this.nSpeed == 1){this.oLeft.removeClass(this.oLeftClass);}
	}
	Move.prototype.RightMove = function()
	{
		if(this.nNum - this.nSpeed > 0)
		{
			//this.oMain.stop().animate({marginLeft:"-="+this.nDis+"px"},500);
			this.oMain.stop().css({marginLeft:"-="+this.nDis+"px"});
			this.oLeft.addClass(this.oLeftClass);
			this.nSpeed++;
		}if(this.nNum - this.nSpeed == 0){this.oRight.removeClass(this.oRightClass);}	
	}
	/*作品展示*/
	var moveHot = new Move(40,2,12,$('.zpzslist_img'),$('.zpzs_left'),'zpzs_left_cur',$('.zpzs_right'),'zpzs_right_cur');
	$('.zpzs_left').click(function(){moveHot.LeftMove();})
	$('.zpzs_right').click(function(){moveHot.RightMove();})
/*二维码*/	
	$('.ewm img').eq(0).click(function(){
		if($('.ewm2').css("display") == "none"){
			$('.ewm2').css("display","block")
		}else{
			$('.ewm2').css("display","none")
		}	
	})
/*搜索*/	
	$('.search img').eq(0).click(function(){
		if($('.search span').css("display") == "none"){
			$('.search span').css("display","block")
		}else{
			$('.search span').css("display","none")
		}	
	})
	/*手机站二维码*/		
	//$('.sjz2').click(function(){
		//if($('.sjz').css("display") == "none"){
			//$('.sjz').css("display","block")
		//}else{
		//	$('.sjz').css("display","none")
		//}	
	//})
	$('.sjz2').mouseover(function(){
		$('.sjz').toggle()
	})
	$('.sjz').mouseout(function(){
		$('.sjz').toggle()	
	})
	
var w=parseInt($('.weizhi_1').css("width")) + 7;
var cw=parseInt($(window).width());
$('.xianbg').css("width",854-w)
$('.xianbg em').eq(0).css("width",847-w);
$('.w825 .xianbg').css("width",824-w)
$('.w825 .xianbg em').eq(0).css("width",817-w);
$('.L_xian').width((cw-1007)/2)
$('.L_xian span').width((cw-1022)/2)
$('.R_xian').width((cw-1010)/2)

$('.list_news li:last-child').addClass("endhover")
$('.list_pwjs li:nth-child(4n)').css("padding-right",0)
$('.zpzs_list ul:nth-child(4n)').css("padding-right",0)
if($('.listcon').height()>670){
	$('.listconbg1').height(($('.listcon').height()-600))
	$('.main2').css("padding-bottom",80)
}
if($('.grzxcon').height()>477){
	$('.grzxconbg1').height(($('.grzxcon').height()-477))
}

$(".ysczp li:nth-child(6n)").css("padding-right",0)

$(".title4_lx").css("left",-(cw-1000)/2)
$(".title4_lx").css("width",(cw-1000)/2)
$(".title4_lx em").css("width",((cw-1000)/2)-7)
$(".title4_rx").css("left",$(".title4_1").width()+34)
$(".title4_rx").css("width",(1000-($(".title4_1").width()+34))+(cw-1000)/2 -7)

$(".weizhi_1 span a:last-child").css("color","#c90000")

$(".title4_1 span a:last-child").css("color","#c90000")
if($('.precon').height()>676){
	$('.preconbg1').height($('.precon').height()-676)
}
