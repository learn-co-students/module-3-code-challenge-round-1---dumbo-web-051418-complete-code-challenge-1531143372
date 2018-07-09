class ImageController {

  static init(){
    ImageController.renderImage();
  }

  static renderImage(){
    Adapter.getImage().then(image => new Image(image))
      .then(image => {
        const imgCard = document.getElementById("image_card");
        imgCard.innerHTML += image.el();
      });
  }
}

    //   const img = document.getElementById("image");
    //   img.src = image.url;
    // }
