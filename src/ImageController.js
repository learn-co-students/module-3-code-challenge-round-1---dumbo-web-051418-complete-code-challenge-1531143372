class ImageController {

  static renderImage(image){
    const imgTag = document.querySelector("#image");
    const imgName = document.querySelector("#name");
    imgTag.setAttribute("src", image.url);
    imgName.innerHTML = `${image.name}`
  }
}
