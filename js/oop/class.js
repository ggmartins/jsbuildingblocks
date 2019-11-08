
//var Anim = function anim() {
function Anim() {
  this.init = function(){
    console.log("init");
  }

};

Anim.prototype.start = function start ()
{
  console.log("anim start");
}

Anim.prototype.stop = function stop ()
{
  console.log("anim stop");
}

var a=new Anim();

a.init();
a.start()
a.stop();

