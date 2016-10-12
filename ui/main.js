console.log('Loaded!');
console.log('asdf');
var element = document.getElementById('main text');
element.innerHTML=('hi all');

var img = document.getElementById('img');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function (){
var interval=setInterval(moveRight,100);
};