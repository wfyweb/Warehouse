// JavaScript Document

//定义主函数
function JSMenu(id) {
    if (!document.getElementById || !document.getElementsByTagName)
        return false;
    this.menu = document.getElementById(id);
    this.submenus = this.menu.getElementsByTagName("div");
}

//引入函数，取得所有span
JSMenu.prototype.init = function() {
    var mainInstance = this;
    for (var i = 0; i < this.submenus.length; i++)
        this.submenus[i].getElementsByTagName("span")[0].onclick = function() {
            mainInstance.toggleMenu(this.parentNode);
        };
    this.expandOne();
};
//展开含"current"的菜单
JSMenu.prototype.expandOne = function() {
    for (var i = 0; i < this.submenus.length; i++) {
        var links = this.submenus[i].getElementsByTagName("a");
        for (var j = 0; j < links.length; j++){
            if (links[j].className == "current")
            this.expandMenu(this.submenus[i]);
            }
        }
};
//变换菜单状态函数
JSMenu.prototype.toggleMenu = function(submenu) {
    if (submenu.className == "collapsed")
        this.expandMenu(submenu);
    else
        this.collapseMenu(submenu);
};
//展开所有菜单函数
JSMenu.prototype.expandMenu = function(submenu) {
    var fullHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
    var links = submenu.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++)
        fullHeight += links[i].offsetHeight;
    var moveBy = Math.round(5 * links.length);
    
    var mainInstance = this;
    var intId = setInterval(function() {
        var curHeight = submenu.offsetHeight;
        var newHeight = curHeight + moveBy;
        if (newHeight < fullHeight)
            submenu.style.height = newHeight + "px";
        else {
            clearInterval(intId);
            submenu.style.height = "";
            submenu.className = "";
        }
    }, 30);
    this.collapseOthers(submenu);
};
//折叠菜单函数
JSMenu.prototype.collapseMenu = function(submenu) {
    var minHeight = submenu.getElementsByTagName("span")[0].offsetHeight;
    var moveBy = Math.round(5 * submenu.getElementsByTagName("a").length);
    var mainInstance = this;
    var intId = setInterval(function() {
        var curHeight = submenu.offsetHeight;
        var newHeight = curHeight - moveBy;
        if (newHeight > minHeight)
            submenu.style.height = newHeight + "px";
        else {
            clearInterval(intId);
            submenu.style.height = "";
            submenu.className = "collapsed";
        }
    }, 30);
};
//折叠其他菜单函数
JSMenu.prototype.collapseOthers = function(submenu) {
        for (var i = 0; i < this.submenus.length; i++)
            if (this.submenus[i] != submenu && this.submenus[i].className != "collapsed")
                this.collapseMenu(this.submenus[i]);
};

//联动
 var selects=[];

  selects['请选择地区']=new Array(new Option('请选择地区',''));

  selects['武汉市']=new Array( new Option('武汉市','武汉市'),new Option('江岸区','江岸区'),new Option('江汉区','江汉区'),new Option('硚口区','硚口区'),new Option('汉阳区','汉阳区'),new Option('武昌区','武昌区'),new Option('青山区','青山区'),new Option('洪山区','洪山区'),new Option('东西湖区','东西湖区'),new Option('汉南区','汉南区'),new Option('蔡甸区','蔡甸区'),new Option('江夏区','江夏区'),new Option('黄陂区','黄陂区'),new Option('新洲区','新洲区'));

  selects['黄石市']=new Array( new Option('黄石市','黄石市'),new Option('黄石港区','黄石港区'),new Option('西塞山区','西塞山区'),new Option('下陆区','下陆区'),new Option('铁山区','铁山区'),new Option('阳新县','阳新县'),new Option('大冶市','大冶市'));

  selects['十堰市']=new Array( new Option('十堰市','十堰市'),new Option('茅箭区','茅箭区'),new Option('张湾区','张湾区'),new Option('郧县','郧县'),new Option('郧西县','郧西县'),new Option('竹山县','竹山县'),new Option('竹溪县','竹溪县'),new Option('房县','房县'),new Option('丹江口市','丹江口市'));

  selects['宜昌市']=new Array( new Option('宜昌市','宜昌市'),new Option('西陵区','西陵区'),new Option('伍家岗区','伍家岗区'),new Option('点军区','点军区'),new Option('猇亭区','猇亭区'),new Option('夷陵区','夷陵区'),new Option('远安县','远安县'),new Option('兴山县','兴山县'),new Option('秭归县','秭归县'),new Option('长阳县','长阳县'),new Option('五峰县','五峰县'),new Option('宜都市','宜都市'),new Option('当阳市','当阳市'),new Option('枝江市','枝江市'));
  
  selects['襄阳市']=new Array( new Option('襄阳市','襄阳市'),new Option('襄城区','襄城区'),new Option('樊城区','樊城区'),new Option('襄州区','襄州区'),new Option('南漳县','南漳县'),new Option('谷城县','谷城县'),new Option('保康县','保康县'),new Option('老河口市','老河口市'),new Option('枣阳市','枣阳市'),new Option('宜城市','宜城市'));
  
  selects['鄂州市']=new Array( new Option('鄂州市','鄂州市'),new Option('梁子湖区','梁子湖区'),new Option('华容区','华容区'),new Option('鄂城区','鄂城区')); 
  
  selects['荆门市']=new Array( new Option('荆门市','荆门市'),new Option('东宝区','东宝区'),new Option('掇刀区','掇刀区'),new Option('京山县','京山县'),new Option('沙洋县','沙洋县'),new Option('钟祥市','钟祥市')); 
  
  selects['孝感市']=new Array( new Option('孝感市','孝感市'),new Option('孝南区','孝南区'),new Option('孝昌县','孝昌县'),new Option('大悟县','大悟县'),new Option('云梦县','云梦县'),new Option('应城市','应城市'),new Option('安陆市','安陆市'),new Option('汉川市','汉川市')); 
  
  selects['荆州市']=new Array( new Option('荆州市','荆州市'),new Option('沙市区','沙市区'),new Option('荆州区','荆州区'),new Option('公安县','公安县'),new Option('监利县','监利县'),new Option('江陵县','江陵县'),new Option('石首市','石首市'),new Option('洪湖市','洪湖市'),new Option('松滋市','松滋市')); 
  
  selects['黄冈市']=new Array( new Option('黄冈市','黄冈市'),new Option('黄州区','黄州区'),new Option('团风县','团风县'),new Option('红安县','红安县'),new Option('罗田县','罗田县'),new Option('英山县','英山县'),new Option('浠水县','浠水县'),new Option('蕲春县','蕲春县'),new Option('黄梅县','黄梅县'),new Option('麻城市','麻城市'),new Option('武穴市','武穴市')); 
  
  selects['咸宁市']=new Array( new Option('咸宁市','咸宁市'),new Option('咸安区','咸安区'),new Option('嘉鱼县','嘉鱼县'),new Option('通城县','通城县'),new Option('崇阳县','崇阳县'),new Option('通山县','通山县'),new Option('赤壁市','赤壁市'));
  
  selects['随州市']=new Array( new Option('随州市','随州市'),new Option('曾都区','曾都区'),new Option('随县','随县'),new Option('广水市','广水市')); 
  
  selects['恩施州']=new Array( new Option('恩施州','恩施州'),new Option('恩施市','恩施市'),new Option('利川市','利川市'),new Option('建始县','建始县'),new Option('巴东县','巴东县'),new Option('宣恩县','宣恩县'),new Option('咸丰县','咸丰县'),new Option('来凤县','来凤县'),new Option('鹤峰县','鹤峰县')); 
  
  selects['仙桃市']=new Array( new Option('仙桃市','仙桃市'),new Option('沙嘴街道','沙嘴街道'),new Option('干河街道','干河街道'),new Option('龙华山街道','龙华山街道'),new Option('郑场镇','郑场镇'),new Option('毛嘴镇','毛嘴镇'),new Option('剅河镇','剅河镇'),new Option('三伏潭镇','三伏潭镇'),new Option('胡场镇','胡场镇'),new Option('长埫口镇','长埫口镇'),new Option('西流河镇','西流河镇'),new Option('沙湖镇','沙湖镇'),new Option('杨林尾镇','杨林尾镇'),new Option('彭场镇','彭场镇'),new Option('张沟镇','张沟镇'),new Option('郭河镇','郭河镇'),new Option('沔城回族镇','沔城回族镇'),new Option('通海口镇','通海口镇'),new Option('陈场镇','陈场镇'),new Option('工业园区','工业园区'),new Option('沙湖原种场','沙湖原种场'),new Option('排湖渔场','排湖渔场'),new Option('五湖渔场','五湖渔场')); 
  
  selects['潜江市']=new Array( new Option('潜江市','潜江市'),new Option('园林街道','园林街道'),new Option('杨市街道','杨市街道'),new Option('周矶街道','周矶街道'),new Option('广华街道','广华街道'),new Option('竹根滩镇','竹根滩镇'),new Option('渔洋镇','渔洋镇'),new Option('王场镇','王场镇'),new Option('高石碑镇','高石碑镇'),new Option('熊口镇','熊口镇'),new Option('老新镇','老新镇'),new Option('浩口镇','浩口镇'),new Option('积玉口镇','积玉口镇'),new Option('张金镇','张金镇'),new Option('龙湾镇','龙湾镇'),new Option('江汉石油管理局','江汉石油管理局'),new Option('潜江经济开发区','潜江经济开发区'),new Option('周矶管理区','周矶管理区'),new Option('后湖管理区','后湖管理区'),new Option('熊口管理区','熊口管理区'),new Option('总口管理区','总口管理区'),new Option('西大垸管理区','西大垸管理区'),new Option('运粮湖管理区','运粮湖管理区'),new Option('高场原种场','高场原种场')); 
  
  selects['天门市']=new Array( new Option('天门市','天门市'),new Option('竟陵街道','竟陵街道'),new Option('侨乡街道','侨乡街道'),new Option('杨林街道','杨林街道'),new Option('多宝镇','多宝镇'),new Option('拖市镇','拖市镇'),new Option('张港镇','张港镇'),new Option('蒋场镇','蒋场镇'),new Option('汪场镇','汪场镇'),new Option('渔薪镇','渔薪镇'),new Option('黄潭镇','黄潭镇'),new Option('岳口镇','岳口镇'),new Option('横林镇','横林镇'),new Option('彭市镇','彭市镇'),new Option('麻洋镇','麻洋镇'),new Option('多祥镇','多祥镇'),new Option('干驿镇','干驿镇'),new Option('马湾镇','马湾镇'),new Option('卢市镇','卢市镇'),new Option('小板镇','小板镇'),new Option('九真镇','九真镇'),new Option('皂市镇','皂市镇'),new Option('胡市镇','胡市镇'),new Option('石河镇','石河镇'),new Option('佛子山镇','佛子山镇'),new Option('净潭乡','净潭乡'),new Option('蒋湖农场','蒋湖农场'),new Option('白茅湖农场','白茅湖农场'));
  
  selects['神农架']=new Array( new Option('神农架','神农架'),new Option('松柏镇','松柏镇'),new Option('阳日镇','阳日镇'),new Option('木鱼镇','木鱼镇'),new Option('红坪镇','红坪镇'),new Option('新华镇','新华镇'),new Option('宋洛乡','宋洛乡'),new Option('九湖乡','九湖乡'),new Option('下谷坪土家族乡','下谷坪土家族乡'));
  
          
                             
  var selects_hy=[];

  selects_hy['请选择行业']=new Array(new Option('请选择行业',''));
  
  selects_hy['传媒出版']=new Array( new Option('广播影视','广播影视'),new Option('新闻出版','新闻出版'),new Option('新媒体','新媒体'));
  
  selects_hy['文化旅游']=new Array( new Option('主题公园','主题公园'),new Option('历史景点','历史景点'));
  
  selects_hy['动漫游戏']=new Array( new Option('漫画作品','漫画作品'),new Option('动漫影视','动漫影视'),new Option('动漫掌上游戏','动漫掌上游戏'),new Option('动漫软件','动漫软件'),new Option('动漫产品','动漫产品'));
  
  selects_hy['演艺娱乐']=new Array( new Option('高雅文艺演出','高雅文艺演出'),new Option('娱乐场所演出','娱乐场所演出'),new Option('主题公园演出','主题公园演出'),new Option('演艺培训','演艺培训'));
  
  selects_hy['艺术品']=new Array( new Option('绘画作品','绘画作品'),new Option('书法作品','书法作品'),new Option('雕刻作品','雕刻作品'),new Option('工艺美术','工艺美术'),new Option('创意园区','创意园区'));
  
  selects_hy['非遗']=new Array( new Option('民间文学','民间文学'),new Option('民间音乐','民间音乐'),new Option('民间舞蹈','民间舞蹈'),new Option('传统戏剧','传统戏剧'),new Option('民间美术','民间美术'),new Option('民俗','民俗'));
  
  selects_hy['会展']=new Array( new Option('会展公司','会展公司'),new Option('会展活动','会展活动'),new Option('会展培训','会展培训'));
  
  selects_hy['大学生创意']=new Array( new Option('创意比赛','创意比赛'),new Option('专利产品','专利产品'),new Option('创意项目','创意项目'));
  
  selects_hy['其他']=new Array( new Option('其他','其他'));
	
  



 <!-- wang modify for the fire fox on 20090605 begin-->

  function chsel(){



  if(document.getElementById('province').value) {

    document.getElementById('ssdq').options.length=0;

     for(var i=0;i<selects[document.getElementById('province').value].length;i++){

      document.getElementById('ssdq').options.add(selects[document.getElementById('province').value][i]);

     }

   }
   
     if(document.getElementById('province_1').value) {

    document.getElementById('sshy').options.length=0;

     for(var i=0;i<selects_hy[document.getElementById('province_1').value].length;i++){

      document.getElementById('sshy').options.add(selects_hy[document.getElementById('province_1').value][i]);
     }

   }
}

