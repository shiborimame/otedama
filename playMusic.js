var n = 1;
var cnt = -4/n;

window.onload = function(){
    this.showCnt();
}
    function ring(){
        t = 1000/n;
        document.getElementById("playMusic").playbackRate = n;
        document.getElementById("playMusic").play();
        timer = setInterval('showCnt()',t);
    }
    function stop(){
        document.getElementById("playMusic").pause();
        clearInterval(timer);
    }
    function showCnt(){
        var time;
        if(cnt<0)time = 0;
        else time = cnt;
        var msg = Math.floor(time) + "回";
        document.getElementById("print").innerHTML = msg;
        cnt++;
    }
    function reset(){
        cnt = -4/n;
        showCnt();
        document.getElementById("playMusic").currentTime = 0;
    }
    function faster(){
        n+=0.25;
    }
    function slower(){
        n-=0.25;
    }
    function defalt(){
        n=1;
    }