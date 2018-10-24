
// Un tableau qui va contenir toutes tes images.
var images = new Array();
images.push("images/janna.jpg");
images.push("images/lulu.jpg");
images.push("images/poro.jpg");
images.push("images/lux.jpg");

var imgId = 0;
var direction='next';

function changeImage(direction){
    document.getElementById("image").src = images[imgId];

    if(direction =='next'){
        imgId++;
        if(imgId > images.length-1){
            imgId=0;
        }

    } else if (direction =='prev') {
        imgId--;
        if(imgId<0){
            imgId=images.length-1;
        }

    }
}

window.setInterval(function() {
    changeImage('next')}, 3000);



$(function(){

    changeImage('next');

    $( "#prev" ).click(function() {
        changeImage('prev');
    });
    $( "#next" ).click(function() {
        changeImage('next');
    });

});
