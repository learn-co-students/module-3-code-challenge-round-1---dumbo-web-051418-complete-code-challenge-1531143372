// name
// like_count
// comments
// url

class Controller {

  static getImage() {
  Adapter.getImage()
      .then( (image) => {
        image.forEach(Controller.renderImage)
      })
    }

    static renderImage() {
      const image = document.getElementById("image")
      const newImage = new Image(image)
      // image.append( newImage.imageEl() )
    }

    static onNewComment(e){
    e.preventDefault()

    const comments = document.querySelector("#comments")

    const commentObj = {
      comments: comments.value
    }
  }
}
