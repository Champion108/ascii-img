const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let gloria;

function preload() {
  gloria = loadImage("Rfa.jpg");
}

function setup() {
  noCanvas();
  gloria.loadPixels();
  for (let j = 0; j < gloria.height; j++) {
    let row = "";
    for (let i = 0; i < gloria.width; i++) {
      const pixelIndex = (i + j * gloria.width) * 4;
      const r = gloria.pixels[pixelIndex + 0];
      const g = gloria.pixels[pixelIndex + 1];
      const b = gloria.pixels[pixelIndex + 2];

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


function draw(){
  image = loadImage(resizedImage)
  console.log(image)
  image.loadPixels();
  for (let j = 0; j < image.height; j++) {
    let row = "";
    for (let i = 0; i < image.width; i++) {
      const pixelIndex = (i + j * image.width) * 4;
      const r = image.pixels[pixelIndex + 0];
      const g = image.pixels[pixelIndex + 1];
      const b = image.pixels[pixelIndex + 2];

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

function resizeImage() {
  var input = document.getElementById('imageInput');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  var file = input.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var img = new Image();

    img.onload = function() {
      var width = 50;
      var height = 50;
      canvas.width = width;
      canvas.height = height;

    //  ctx.drawImage(img, 0, 0, width, height);

      resizedImage = canvas.toDataURL('image/jpeg');
      
    };

    img.src = e.target.result;
    
    draw();
  };
  reader.readAsDataURL(file);
}
