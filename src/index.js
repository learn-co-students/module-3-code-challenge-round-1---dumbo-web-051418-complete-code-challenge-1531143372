document.addEventListener('DOMContentLoaded', function() {

  const imageId = 13 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  Adapter.getImage(imageURL)
  .then(image => {

    ImageController.renderImage(image);
    LikesController.renderLikes(image);
    CommentController.renderComments(image);
  })

  const commentForm = document.querySelector("#comment_form");
  commentForm.addEventListener("submit", e => {
    e.preventDefault();
    const comment = document.querySelector("#comment_input").value;

    
    CommentController.updateComment(comment)

    commentForm.reset();
  })


})
