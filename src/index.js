document.addEventListener('DOMContentLoaded', function() {

  const imageId = 1 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`



  const adapter = new Adapter;
  let app =''

  adapter.getImage()
  .then(data => {
    app = new App(data)
    app.render()
  })

  const container=document.querySelector('.container')
  container.addEventListener('click', e => {
    if (e.target.id === 'like_button')
    console.log(e.target.id)
      app.handleLikes()
      app.render()
      adapter.postLikes({image_id: app.image.id})
  })
  // have to make a querySelector for this submit also make a addEventListener for
  // the changes
  // did not finish making comments for my program!


  // const container=document.querySelector('.container')
  // container.addEventListener('submit', e => { console.log(e)
})
