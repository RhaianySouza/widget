var w; var p;
function time(y,x){
    clearInterval(w);
    buttons(2);
    p=x;
    var b = document.getElementById("menu").getElementsByTagName("li");
    for(var i =0; i< b.length;i++){
        if(b[i].getAttribute("data-set")=="on" && i!=y){
            b[i].setAttribute("data-set","off");
        }else if(b[i].getAttribute("data-set")=="off" && i==y){
            b[i].setAttribute("data-set","on");
        }
    }
    document.getElementById("contador").innerText = x>=10? x+":00":"0"+x+":00";
}
function ctrl(x){
    clearInterval(w);
    buttons(2);
    var a = document.getElementById("contador");
    
    var y = parseInt(a.innerText.substring(0,a.innerText.indexOf(":")));
    var z = parseInt(a.innerText.substring(a.innerText.indexOf(":")+1));
    
    var d = new Date();
    d.setMinutes(y+x); d.setSeconds(z);

    a.innerText = d.getMinutes()>=10? d.getMinutes()+":": "0"+d.getMinutes()+":";
    a.innerText += d.getSeconds()>=10? d.getSeconds(): "0"+d.getSeconds();
    
    p = y+x;
}
function cronometro(){
    clearInterval(w);
    buttons(0);
    var a = document.getElementById("contador");
    var y = parseInt(a.innerText.substring(0,a.innerText.indexOf(":")));
    var z = parseInt(a.innerText.substring(a.innerText.indexOf(":")+1));
    var d = new Date();
    d.setMinutes(y); d.setSeconds(z);
    w = setInterval(function(){
        d.setSeconds(d.getSeconds()-1);
        if(d.getMinutes()==0 && d.getSeconds()==0){
            clearInterval(w);
            a.innerText = "00:00";
        }else{
            a.innerText = d.getMinutes()>=10? d.getMinutes()+":": "0"+d.getMinutes()+":";
            a.innerText += d.getSeconds()>=10? d.getSeconds(): "0"+d.getSeconds();
        }
    },1000)
    
}
function _break(){
    buttons(1);
    clearInterval(w);
}
function stop(){
    buttons(2);
    clearInterval(w);
    var a = document.getElementById("contador");
    a.innerText = p>=10? p+":00": "0"+p+":00";
}
function buttons(x){
    if(x==0){
        document.getElementById("startStop").getElementsByTagName('button')[0].setAttribute("data-set","off");
        document.getElementById("startStop").getElementsByTagName('button')[1].setAttribute("data-set","on");
        document.getElementById("startStop").getElementsByTagName('button')[2].setAttribute("data-set","on");
    }else if(x==1){
        document.getElementById("startStop").getElementsByTagName('button')[0].setAttribute("data-set","on");
        document.getElementById("startStop").getElementsByTagName('button')[1].setAttribute("data-set","off");
    }else{
        document.getElementById("startStop").getElementsByTagName('button')[0].setAttribute("data-set","on");
        document.getElementById("startStop").getElementsByTagName('button')[1].setAttribute("data-set","off");
        document.getElementById("startStop").getElementsByTagName('button')[2].setAttribute("data-set","off");
    }
}
function page(x){
    var a = document.getElementById('about').getElementsByTagName('p');
    var t;
    for(var i=0;i<a.length;i++){
        t = parseInt(a[i].getAttribute("page"));
        if(t!=1 && x==1){
            console.log(t+x<4? t+x:1)
            a[i].setAttribute("page",t+x<5? t+x:1)
        }else{
            console.log(t+x>0? t+x:4);
            a[i].setAttribute("page",t+x>0? t+x:4)
        }

    }
};
