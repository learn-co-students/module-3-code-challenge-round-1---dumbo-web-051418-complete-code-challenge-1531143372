class Image {
  constructor(imageObj) {
    this.id = imageObj.id
  }

  imageEl() {
    const imageDiv = document.createElement("div")
    imageDiv.className = "image-card"
    imageDiv.id = `image-card-${this.id}`

    return imageDiv
}
