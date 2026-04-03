javascript:(function(){
    var id='math-tool';
    var panel=document.getElementById(id);
    if(panel){panel.remove();return;}
    
    panel=document.createElement('div');
    panel.id=id;
    panel.style.cssText='position:fixed;bottom:20px;right:20px;width:150px;padding:10px;background:#f0f0f0;border:2px solid #333;border-radius:5px;z-index:999999;font-family:sans-serif;box-shadow:2px 2px 5px rgba(0,0,0,0.3);';
    
    panel.innerHTML='<div style="display:flex;justify-content:space-between;margin-bottom:5px;">'+
        '<button id="coll-btn" style="cursor:pointer;">_</button>'+
        '<span style="font-weight:bold;">Math</span>'+
        '<button id="close-btn" style="cursor:pointer;">X</button>'+
        '</div>'+
        '<div id="content" style="text-align:center;"><button id="calc-btn" style="width:100%;cursor:pointer;">2 + 2 = ?</button></div>';
    
    document.body.appendChild(panel);
    
    // Close functionality
    document.getElementById('close-btn').onclick=function(){panel.remove();};
    
    // Collapse/Expand functionality
    document.getElementById('coll-btn').onclick=function(){
        var c=document.getElementById('content');
        if(c.style.display==='none'){c.style.display='block';panel.style.height='auto';}
        else{c.style.display='none';panel.style.height='auto';}
    };
    
    // Simple math button
    document.getElementById('calc-btn').onclick=function(){
        this.innerHTML='4';
        setTimeout(()=>{this.innerHTML='2 + 2 = ?';},2000);
    };
})();

