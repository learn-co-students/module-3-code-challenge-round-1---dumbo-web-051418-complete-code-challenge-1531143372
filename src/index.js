// I could not get the image to be loaded onto the page
// If I was able to get the image on, I would've added the event listeners on index.js to their respective tags
// For example, the like button event listener would be present under the creation of the buttonTag


//The like button works but since the image isn't there, I can't update the database directly for that image
//I would've incremented the like_count attribute of the image instead

// For the comments, the case is the same since I don't have the image class with the comments attribute which should be an empty array
// When the comment is created, I would append the object to the comments attribute (Image.comments) 


document.addEventListener('DOMContentLoaded', function() {

  const imageId = 4 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const likeButton = document.querySelector('#like_button')

  const commentForm = document.querySelector('#comment_form')

  const comments = document.querySelector('#comments')

  Adapter.getImageData()
    .then((image) => Image.renderImage)

  likeButton.addEventListener('click', (e) => {
    // console.log(e)
    const id = e.target.dataset.id
    Adapter.addLikes(id)
      .then((data) => {
        Image.renderLikes(data)
      })
  })

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    Comment.getInputs()

  })



})
