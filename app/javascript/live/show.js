/* 引入krpano.js后获得的全局方法 */       
embedpano({							 	 
    id: "krpanoSWFObject",
    swf: "/pano_files/pano.swf",          // flash模式下用到的swf文件，非必须
    xml: "/pano_config/eye_objects",      // 全景图xml路径，用于描述整个全景图
	target: "pano",                       // 挂载点id，唯一必须的参数
    html5: "always",    
	supportHoverInfoView: true,	    			     
	//onready: krpanoReady    
	onready() {         				  // 回调函数，类似的还有onerror  
		var krpano = document.getElementById('krpanoSWFObject');
		krpanoReady(krpano); 
    }       
});  

function clickMoveVrImage(params, scene){
	var krpano = document.getElementById('krpanoSWFObject');
	var scene_page = scene;
	krpano.call('to2(' + scene_page + ')');  
	return; 
}  

function loadHotspots(hotspot){ 
	var data = document.querySelector(".data_ex");
	var scene_image = data.getAttribute('data-friendly_id');
	//code...	 
} 

function addHotspot(hs_name, url, h, v, scene_page){  
	var krpano = document.getElementById('krpanoSWFObject');
	krpano.call('add_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ',' + scene_page +')');   
    krpano.call("set(hotspot[" + hs_name + "].atv, " + h + ");");
	krpano.call("set(hotspot[" + hs_name + "].ath, " + v + ");");   
	krpano.call("set(hotspot[" + hs_name + "].url, " + url +");");
	krpano.set("hotspot[" + hs_name + "].onclick", "click_hotspot_move(" + scene_page + ")");
} 

function krpanoReady(get_krpano) {   
	var krpano = get_krpano;  

	/* hotpsot 值從這帶入 */    
	var hs_name = 'hs0001' // + ((Date.now() + Math.random()) | 0); 
   	var url = '/icon/test_hotspot.png'; 
    var h = -0.900;
    var v = 56.800;    
	var scene_page1 = "scene3";

	// for & js 迴圈帶入熱點的值
		addHotspot(hs_name, url, h, v, scene_page1);  

	// krpano.call('calclength()');

	// 呼叫 function 
	// getScene();	
	
}	

