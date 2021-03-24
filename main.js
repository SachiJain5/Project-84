canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_img = "racing.jpg"

function add(){
    background_imgTag = new Image;
    background_imgTag.onload = uploadBackgroundimg;
    background_imgTag.src = background_img;

    car1_imgTag = new Image;
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image;
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadBackgroundimg(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        1up();
        console.log("up arrow key");
    }
    if(keyPressed == '40'){
        1down();
        console.log("down arrow key");
    }
    if(keyPressed == '37'){
        1left();
        console.log("left arrow key");
    }
    if(keyPressed == '39'){
        1right();
        console.log("right arrow key");
    }
    if(keyPressed == '87'){
        2up();
        console.;log("key w")
    }
    if(keyPressed == '83'){
        2down();
        console.log("key s")
    }
    if(keyPressed == '65'){
        2left();
        console.log("key a");
    }
    if(keyPressed == '68'){
        2right();
        console.log("key d");
    }
}
