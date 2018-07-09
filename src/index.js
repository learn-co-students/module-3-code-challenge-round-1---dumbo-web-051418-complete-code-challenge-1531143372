document.addEventListener('DOMContentLoaded', function() {

  const imageId = 12 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imgTag = document.getElementsByTagName('img')[0]
  const commentForm = document.getElementById('comment_form')
  const commentInput = document.getElementById("comment_input")
  const commentsList = document.getElementById("comments")
  const likesNumber = document.getElementById('likes')
  const likeBtn = document.getElementById("like_button")

  // i guess doing separate get fetch requests for each image, their comments, and their likes is best? that way things render more quickly..

  // get my image
  Adapter.getImage(imageId)
    .then(data => {
      imgTag.src = data.url
      imgTag.dataset.id = data.id
    })

  // get image comments
  Adapter.getImageComments(imageId)
    .then(data => {
      // tried sorting by last id or comment created 
      // sortedArray = []
      // data.comments.forEach((cmt)=>{
      //   sortedArray.push([cmt.id, cmt.content])
      // })
      //
      // debugger
      data.comments.forEach((comment) => {
        const cmt = new Comment(comment)
        commentsList.innerHTML += cmt.render()
      })
    })

  // get image likes
  Adapter.getImageLikes(imageId)
    .then(data => {
      likesNumber.innerText = data.like_count
    })

    // comment form event listener
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const comment = commentInput.value
    const commentsImg = e.target.parentElement.querySelector('IMG')
    Adapter.createComment({image_id: commentsImg.dataset.id, content: comment})
      .then(data => {
        const newComment = new Comment(data)
        newCommentElement = document.createElement('li')
        newCommentElement.dataset.id = newComment.id
        newCommentElement.dataset.imageId = newComment.image_id
        newCommentElement.innerText = newComment.content
        commentsList.prepend(newCommentElement)
        commentInput.value = ""
      })
  })

  likeBtn.addEventListener('click', (e) => {
    const likesImg = e.target.parentElement.querySelector('IMG')

    // create a new 'like' for the image
    Adapter.updateImgLikeCount({image_id: likesImg.dataset.id})
      .then(data => {
        // render like count
        Adapter.getImageLikes(imageId)
          .then(data => likesNumber.innerText = data.like_count)
      })
  })

})
