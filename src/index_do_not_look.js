// My attempt to create something object oriented 10 minutes before time due
// Not complete

document.addEventListener('DOMContentLoaded', function() {

  const imageId = 11 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const adapter = new Adapter()

  adapter.renderImage().then((imageData)=>{
    const imageEl = document.querySelector("#image")
    imageEl.setAttribute("src", imageData.url)

    const title = document.createTextNode(imageData.name)
    const nameEl = document.querySelector("#name")
    nameEl.appendChild(title)

    const likesEl = document.querySelector("#likes")
    likesEl.innerHTML = imageData.like_count

    const commentsUlEl = document.querySelector("#comments")

    imageData.comments.forEach((comment) => {
      const liEl = document.createElement("li")
      const commentEl = document.createTextNode(comment.content)
      liEl.appendChild(commentEl)
      commentsUlEl.appendChild(liEl)
    })
  })

  const likeButtonEl = document.querySelector("#like_button")
  likeButtonEl.addEventListener('click', (e) => {
    const likesEl = document.querySelector("#likes")
    let currentLikes = parseInt(likesEl.innerHTML)
    let updatedLikes = ++currentLikes
    likesEl.innerHTML = updatedLikes

    adapter.persistLikes(updatedLikes)
  })


  const formEl = document.querySelector("#comment_form")
  formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const submittedComment = e.target.comment_input.value
    const commentsUlEl = document.querySelector("#comments")

    const liEl = document.createElement("li")
    const commentEl = document.createTextNode(submittedComment)
    liEl.appendChild(commentEl)
    commentsUlEl.prepend(liEl)
    e.target.reset()

    const data = {image_id: imageId, content: submittedComment}

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('https://randopic.herokuapp.com/comments', options)
  })
})
