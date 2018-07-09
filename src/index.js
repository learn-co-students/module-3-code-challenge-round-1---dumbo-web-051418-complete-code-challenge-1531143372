document.addEventListener('DOMContentLoaded', function() {

  const imageId = 3 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  Adapter.getImageInfo(image)
    const imageContentDiv = document.getElementById("image_content")
    const newImage = new Image(image)
    imageContentDiv.append(Image.newImage.imgEl())



  Image.addEventListener("click", (event) => {
      if (event.target.id === "like_button"){
        Adapter.getlike(event.target.id)
        .then((image) => {
          Image.renderLikes(image)
          })}
        }
      )

  Comment.addEventListener("submit", (event) => {
    event.preventDefault()
    if (event.target.id === "submit"){
      Adapter.createComment()
    }
    Comment.renderComment()
    
  })

  // more steps to add comments :(



})
