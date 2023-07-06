
/*
let density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let img;

function preload() {
  img = loadImage("IMG20220809154015.jpg");
}

function setup() {
  noCanvas();
  img.loadPixels();
  for (let j = 0; j < img.height; j++) {
    let row = "";
    for (let i = 0; i < img.width; i++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex + 0];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    createDiv(row);
  }
}
*/

let img = document.getElementById("image")

function resize() {
  
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
  
    var width = 48;
    var height = 48;
    canvas.width = width;
    canvas.height = height;
  
    ctx.drawImage(img, 0, 0, width, height);
  
    var resizedImage = canvas.toDataURL('image/jpeg');
     
    console.log("hello World!!")
    console.log(resizedImage);
  };
  
  resize();