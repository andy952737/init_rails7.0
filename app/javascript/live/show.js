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

function clickVrImage(params, scene){
	var krpano = document.getElementById('krpanoSWFObject');
	var scene_page = scene;
	krpano.call('to2(' + scene_page + ')');  
	return;
}

function krpanoReady(get_krpano) {  
	var krpano = get_krpano; 
	// var test_data = document.querySelector(".click_img_a");
	// console.log(test_data.getAttribute('data-ddd'));
	// code ...	
}	

