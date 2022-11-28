// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)


// set(variable, value) - 将指定数值赋值给指定 krpano 对象
// get(variable) - 返回指定 krpano 变量的数值
// call(action) - 调用和执行任意 krpano 动作代码 
// spheretoscreen(h, v) - 直接调用 spheretoscreen 动作
// screentosphere(x ,y) - 直接调用 screentosphere 动作 



/* 引入krpano.js后获得的全局方法 */       
embedpano({							 	 
    id: "krpanoSWFObject",
    swf: "/pano_files/pano.swf",          // flash模式下用到的swf文件，非必须
    xml: "/krpano/krpano.xml",              // 全景图xml路径，用于描述整个全景图
	target: "pano",                       // 挂载点id，唯一必须的参数
    html5: "always",    
	supportHoverInfoView: true,	    			     
	//onready: krpanoReady  
	onready() {         				  // 回调函数，类似的还有onerror  
		var krpano = document.getElementById('krpanoSWFObject');
		krpanoReady(krpano); 
    }      
});   

function krpanoReady(get_krpano) {  
	var krpano = get_krpano;    

	// var fov = Number( krpano.get("view.fov") );
	// fov += 10.0;
	// krpano.set("view.fov", fov);   
	
	//var hotspot_count = krpano.get('hotspot.count');
    //krpano.set("autorotate.enabled", true);
    //krpano.call('xml_action();');   
    //krpano.call('addhot2spot();');    

    /* add hotspot var name */
    var hs_name = 'hs' + ((Date.now() + Math.random()) | 0); 
    var hs_name2 = 'hs2' + ((Date.now() + Math.random()) | 0); 
   	var url = '/icon/icon_hotspot.png'; 
    var h = -0.900;
    var v = 56.800;    
    var h2 = -15;  
    var v2 = +12;     
	
	/* hotpsot迴圈從這帶入 */    
	add_hotspot(hs_name, url, h, v);  
	add_hotspot(hs_name2, url, h2, v2);   

	// var arrays = ["eyehouse", "edhouse", "EyehouseCoffee"];
	// arrays.forEach(function(item){ 
	// 	  //alert(item); 
	// });  

	/* add for hotspot */ 
	function add_hotspot(hs_name, url, h, v){           
		//krpano.call('add_hotspot(' + hs_name + ',');
		krpano.call('add_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ')');   
	    krpano.call("set(hotspot[" + hs_name + "].atv, " + h + ");");
			krpano.call("set(hotspot[" + hs_name + "].ath, " + v + ");");   
			krpano.call("set(hotspot[" + hs_name + "].url, '/icon/icon_hotspot.png');");
			//krpano.call("set(hotspot[" + hs_name + "].onclick, js(alert(‘點擊熱點'));"); 
			//krpano.call("set(hotspot[" + hs_name + "].onclick, click_hotspot(" + hs_name + ")"); 
			//krpano.set("hotspot[" + hs_name + "].onclick", "click_hotspot(" + hs_name + ")");

			krpano.call('click_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ')');  
	    // krpano.set('hotspot[' + hs_name + '].url', url); 
	    // krpano.set('hotspot[' + hs_name + '].ath', h);
	    // krpano.set('hotspot[' + hs_name + '].atv', v);
	    // krpano.set("hotspot[" + hs_name + "].onclick", "click_hotspot(" + hs_name + ")");
	    
	}  

	function test(hs) {
	  console.log(hs);    
	  //alert("test");
	};  

	//krpano.call('add_hotspot(' + name + ',' + src + ',' + krpano.get('mouseath') + ',' + krpano.get('mouseatv') +',' + scene +')');

   
}