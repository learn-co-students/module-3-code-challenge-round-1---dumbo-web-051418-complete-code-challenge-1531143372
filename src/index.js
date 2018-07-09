document.addEventListener('DOMContentLoaded', function() {

  const imageId = 11 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL).then(r => r.json()).then((imageData)=>{
    const imageEl = document.querySelector("#image")
    imageEl.setAttribute("src", imageData.url)

    const title = document.createTextNode(imageData.name)
    const nameEl = document.querySelector("#name")
    nameEl.appendChild(title)

    const likesEl = document.querySelector("#likes")
    likesEl.innerHTML = imageData.like_count

    const commentsUlEl = document.querySelector("#comments")

    // My attempt to sort the comments, but I predict I will run out of time here
    const unsortedComments = imageData.comments
    let sortedComments = unsortedComments.sort((x,y) => {
      if (x.id < y.id) {
        return -1
      } else if (y.id < x.id) {
        return 1
      } else {
        return 0
      }
    })
    // End attempt to sort the comments

    sortedComments.forEach((comment) => {
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

    const data = {image_id: imageId, like_count: updatedLikes}

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('https://randopic.herokuapp.com/likes', options)
    .then(r => r.json())
  })


  const formEl = document.querySelector("#comment_form")
  formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const submittedComment = e.target.comment_input.value
    const commentsUlEl = document.querySelector("#comments")

    const liEl = document.createElement("li")
    const commentEl = document.createTextNode(submittedComment)
    liEl.appendChild(commentEl)
    commentsUlEl.appendChild(liEl)
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
