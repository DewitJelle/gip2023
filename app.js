function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

preload([
    'img/foto1.JPG',
    'img/foto2.JPG',
    'img/foto3.JPG',
    'img/foto4.JPG',
    'img/foto5.jpeg',
    'img/foto6.jpg',
    'img/foto7.jpg',
    'img/foto8.jpg',
    'img/foto9.jpg',
    'img/foto10.jpg',
    'img/foto11.jpg',
    'img/foto12.jpg',
    'img/foto13.jpg',
    'img/foto14.jpg',
    'img/foto15.jpg',
    'img/foto16.png',
    'img/foto17.jpg',
    'img/foto18.jpg',
    'img/foto19.jpg',
    'img/foto20.jpg',
    'img/foto21.jpg',
    'img/header.jpg',
    'img/logo.png',
]);
