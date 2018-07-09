document.addEventListener('DOMContentLoaded', function() {

  // const imageId = 15 //Enter your assigned imageId here
  // const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  // const likeURL = `https://randopic.herokuapp.com/likes/`
  // const commentsURL = `https://randopic.herokuapp.com/comments/`

  const adapter = new Adapter()
  const controller = new Controller()

  const imgCard = document.querySelector('#image-card')

  adapter.getImage() //needs render comment functionality
    .then(obj => controller.render(obj))

  imgCard.addEventListener('click', e => {
    if (e.target.id === 'like-button') {
      const likes = imgCard.querySelector('#likes')
      likes.innerHTML = parseInt(likes.innerHTML) + 1

      const likesNum = parseInt(likes.innerHTML)
      // adapter.addlikes(likesNum)
      adapter.getImage()
        .then(obj => {
          obj.like_count = likesNum
          console.log(obj)
          adapter.addlikes(obj)
        })
    }
  })

  imgCard.addEventListener('submit', e => {
    if (e.target.id === 'comment-form') {
      e.preventDefault()
      console.log(`submitted`);
      const comment = document.querySelector('#comment-input').value

      controller.renderComment(comment)

      // adapter.addlikes(likesNum)
      adapter.addComment(comment)


    }
  })
  // adapter.comment()
  //   .then()


})
