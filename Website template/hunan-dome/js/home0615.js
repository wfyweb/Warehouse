function me(v1,v2,v3,current){

		var v1;

		var v2;

		var v3;

		jQuery("."+v1+"").mouseenter(function(){

		if(current&&current==v1){

			return;

		}

		jQuery("."+v1+" .txt a").css("color","#fff");

		jQuery("."+v2+"").animate({height:41},"fast",function(){	

			jQuery("."+v3+"").css('display','block');

			jQuery("."+v3+"").animate({height:41},"fast",function(){

				jQuery("."+v3+"").fadeOut('fast')

				})

			});

		

	});

	}



	function ml(v1,v2,v3,current){

		var v1;

		var v2;

		var v3;

		if(current&&current==v1){

			return;

		}

		jQuery("."+v1+"").mouseleave(function(){

			jQuery("."+v1+" .txt a").css("color","#000");

			jQuery("."+v3+"").fadeIn("fast",function(){	

				jQuery("."+v3+"").animate({height:'0'},"fast",function(){

					jQuery("."+v3+"").css('display','none');

					jQuery("."+v2+"").animate({height:'0'},"fast");

					});

				})

		});

	}

	function initMenu(current){

		var nav=jQuery(".nav ul li");
		for(var i=0;i<nav.length;i++){
			var classname=nav[i].className;
			var children=jQuery(nav[i]).children();
			me(classname,children[0].className,children[1].className,current);
			ml(classname,children[0].className,children[1].className,current);
		}

	}







function settab(name,cursel,n){

  for(i=1;i<=n;i++){

   var menu=document.getElementById(name+i);

   var con=document.getElementById("con_"+name+"_"+i);

   menu.className=i==cursel?"hover":"";

   con.style.display=i==cursel?"block":"none";

 }

}



$(function(){

       initMenu("home");
  var tsid;
  $('li.mainlevel > a').mouseover(function(){
      clearTimeout(tsid);
      var that = $(this);
      tsid = setTimeout(function(){
		that.parent().find('ul').slideDown();
	  }, 500);
  });
  $('li.mainlevel').mouseleave(function(){
  clearTimeout(tsid);
	$(this).find('ul').slideUp("fast");
  });

});



function showBlog(spaceid, h, l)

{

	switch(l){case 1:ll = 40;break;case 2:ll = 128;break;case 3:ll = 215;}

	$('li .xxxx').removeClass('cur');

	$('.a_arrow').css('margin', (30*(h+1)+h)+'px 0 0 '+ ll+'px');

	$(".individ").hide();

	$("#blog_"+ spaceid).fadeIn("fast");

	$('#space_'+ spaceid).addClass('cur');

}





(function($){

	$.fn.slide=function(options){

		$.fn.slide.deflunt={

		effect : "fade", 

		autoPlay:false, 

		delayTime : 500, 

		interTime : 2500,

		defaultIndex : 0,

		titCell:".hd li",

		mainCell:".bd",

		trigger: "mouseover",

		scroll:1,

		vis:1,

		titOnClassName:"on",

		autoPage:false,

		prevCell:".prev",

		nextCell:".next"

		};



		return this.each(function() {

			var opts = $.extend({},$.fn.slide.deflunt,options);

			var index=opts.defaultIndex;

			var prevBtn = $(opts.prevCell, $(this));

			var nextBtn = $(opts.nextCell, $(this));

			var navObj = $(opts.titCell, $(this));

			var navObjSize = navObj.size();

			var conBox = $(opts.mainCell , $(this));

			var conBoxSize=conBox.children().size();

			var slideH=0;

			var slideW=0;

			var selfW=0;

			var selfH=0;

			var autoPlay = opts.autoPlay;

			var inter=null;

			var oldIndex = index;



			if(conBoxSize<opts.vis) return; 



			

			if( navObjSize==0 )navObjSize=conBoxSize;

			if( opts.autoPage ){

				var tempS = conBoxSize-opts.vis;

				navObjSize=1+parseInt(tempS%opts.scroll!=0?(tempS/opts.scroll+1):(tempS/opts.scroll)); 

				navObj.html(""); 

				for( var i=0; i<navObjSize; i++ ){ navObj.append("<li>"+(i+1)+"</li>") }

				var navObj = $("li", navObj);

			}



			conBox.children().each(function(){ 

				if( $(this).width()>selfW ){ selfW=$(this).width(); slideW=$(this).outerWidth(true);  }

				if( $(this).height()>selfH ){ selfH=$(this).height(); slideH=$(this).outerHeight(true);  }

			});



			switch(opts.effect)

			{

				case "top": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+opts.vis*slideH+'px"></div>').css( { "position":"relative","padding":"0","margin":"0"}).children().css( {"height":selfH} ); break;

				case "left": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+opts.vis*slideW+'px"></div>').css( { "width":conBoxSize*slideW,"position":"relative","overflow":"hidden","padding":"0","margin":"0"}).children().css( {"float":"left","width":selfW} ); break;

				case "leftLoop":

				case "leftMarquee":

					conBox.children().clone().appendTo(conBox).clone().prependTo(conBox); 

					conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+opts.vis*slideW+'px"></div>').css( { "width":conBoxSize*slideW*3,"position":"relative","overflow":"hidden","padding":"0","margin":"0","left":-conBoxSize*slideW}).children().css( {"float":"left","width":selfW}  ); break;

				case "topLoop":

				case "topMarquee":

					conBox.children().clone().appendTo(conBox).clone().prependTo(conBox); 

					conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+opts.vis*slideH+'px"></div>').css( { "height":conBoxSize*slideH*3,"position":"relative","padding":"0","margin":"0","top":-conBoxSize*slideH}).children().css( {"height":selfH} ); break;

			}



			

			var doPlay=function(){

				switch(opts.effect)

				{

					case "fade": case "top": case "left": if ( index >= navObjSize) { index = 0; } else if( index < 0) { index = navObjSize-1; } break;

					case "leftMarquee":case "topMarquee": if ( index>= 2) { index=1; } else if( index<0) { index = 0; } break;

					case "leftLoop": case "topLoop":

						var tempNum = index - oldIndex; 

						if( navObjSize>2 && tempNum==-(navObjSize-1) ) tempNum=1;

						if( navObjSize>2 && tempNum==(navObjSize-1) ) tempNum=-1;

						var scrollNum = Math.abs( tempNum*opts.scroll );

						if ( index >= navObjSize) { index = 0; } else if( index < 0) { index = navObjSize-1; }

					break;

				}

				switch (opts.effect)

				{

					case "fade":conBox.children().stop(true,true).eq(index).fadeIn(opts.delayTime).siblings().hide();break;

					case "top":conBox.stop(true,true).animate({"top":-index*opts.scroll*slideH},opts.delayTime);break;

					case "left":conBox.stop(true,true).animate({"left":-index*opts.scroll*slideW},opts.delayTime);break;

					case "leftLoop":

						if(tempNum<0 ){

								conBox.stop(true,true).animate({"left":-(conBoxSize-scrollNum )*slideW},opts.delayTime,function(){

								for(var i=0;i<scrollNum;i++){ conBox.children().last().prependTo(conBox); }

								conBox.css("left",-conBoxSize*slideW);

							});

						}

						else{

							conBox.stop(true,true).animate({"left":-( conBoxSize + scrollNum)*slideW},opts.delayTime,function(){

								for(var i=0;i<scrollNum;i++){ conBox.children().first().appendTo(conBox); }

								conBox.css("left",-conBoxSize*slideW);

							});

						}break;



					case "topLoop":

						if(tempNum<0 ){

								conBox.stop(true,true).animate({"top":-(conBoxSize-scrollNum )*slideH},opts.delayTime,function(){

								for(var i=0;i<scrollNum;i++){ conBox.children().last().prependTo(conBox); }

								conBox.css("top",-conBoxSize*slideH);

							});

						}

						else{

							conBox.stop(true,true).animate({"top":-( conBoxSize + scrollNum)*slideH},opts.delayTime,function(){

								for(var i=0;i<scrollNum;i++){ conBox.children().first().appendTo(conBox); }

								conBox.css("top",-conBoxSize*slideH);

							});

						}break;



					case "leftMarquee":

						var tempLeft = conBox.css("left").replace("px",""); 



						if(index==0 ){

								conBox.animate({"left":++tempLeft},0,function(){

									if( conBox.css("left").replace("px","")>= 0){ for(var i=0;i<conBoxSize;i++){ conBox.children().last().prependTo(conBox); }conBox.css("left",-conBoxSize*slideW);}

								});

						}

						else{

								conBox.animate({"left":--tempLeft},0,function(){

									if(  conBox.css("left").replace("px","")<= -conBoxSize*slideW*2){ for(var i=0;i<conBoxSize;i++){ conBox.children().first().appendTo(conBox); }conBox.css("left",-conBoxSize*slideW);}

								});

						}break;// leftMarquee end



						case "topMarquee":

						var tempTop = conBox.css("top").replace("px",""); 

							if(index==0 ){

									conBox.animate({"top":++tempTop},0,function(){

										if( conBox.css("top").replace("px","") >= 0){ for(var i=0;i<conBoxSize;i++){ conBox.children().last().prependTo(conBox); }conBox.css("top",-conBoxSize*slideH);}

									});

							}

							else{

									conBox.animate({"top":--tempTop},0,function(){

										if( conBox.css("top").replace("px","")<= -conBoxSize*slideH*2){ for(var i=0;i<conBoxSize;i++){ conBox.children().first().appendTo(conBox); }conBox.css("top",-conBoxSize*slideH);}

									});

							}break;// topMarquee end





				}//switch end

					navObj.removeClass(opts.titOnClassName).eq(index).addClass(opts.titOnClassName);

					oldIndex=index;

			};

			

			doPlay();



			

			if (autoPlay) {

					if( opts.effect=="leftMarquee" || opts.effect=="topMarquee"  ){

						index++; inter = setInterval(doPlay, opts.interTime);

						conBox.hover(function(){if(autoPlay){clearInterval(inter); }},function(){if(autoPlay){clearInterval(inter);inter = setInterval(doPlay, opts.interTime);}});

					}else{

						 inter=setInterval(function(){index++; doPlay() }, opts.interTime); 

						$(this).hover(function(){if(autoPlay){clearInterval(inter); }},function(){if(autoPlay){clearInterval(inter); inter=setInterval(function(){index++; doPlay() }, opts.interTime); }});

					}

			}



			

			var mst;

			if(opts.trigger=="mouseover"){

				navObj.hover(function(){ clearTimeout(mst); index=navObj.index(this); mst = window.setTimeout(doPlay,200); }, function(){ if(!mst)clearTimeout(mst); });

			}else{ navObj.click(function(){index=navObj.index(this);  doPlay(); })  }

			nextBtn.click(function(){ index++; doPlay(); });

			prevBtn.click(function(){  index--; doPlay(); });



    	});



	};



})(jQuery);


