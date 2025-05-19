const bar = document.getElementById('bar');
const nav =document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
           nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
           nav.classList.remove('active');
    })
}
//making slider image in productdes.html work well
var mainImg = document.getElementById("main-img");
var smallImage = document.getElementsByClassName("small-image");

smallImage[0].onclick = function(){
mainImg.src = smallImage[0].src;
}
smallImage[1].onclick = function(){
    mainImg.src = smallImage[1].src;
} 
smallImage[2].onclick = function(){
    mainImg.src = smallImage[2].src;
}
smallImage[3].onclick = function(){
    mainImg.src = smallImage[3].src;
}