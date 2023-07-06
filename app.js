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

      ctx.drawImage(img, 0, 0, width, height);
      var resizedImage = canvas.toDataURL('image/jpeg');
      console.log(resizedImage)
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
