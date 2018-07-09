class Controller {

  render(obj){
    const div = document.querySelector('#image-card')
    const img = new Image(obj)
    div.innerHTML += img.imgEl()
  }
  renderComment(comment){
    const comments = document.querySelector('#comments')
    const newComment = document.createElement('li')
    newComment.innerHTML = comment
    comments.appendChild(newComment)
  }

  renderComments(comment){
    // needs to add comments from DB to dom
    const comments = document.querySelector('#comments')
  }
}
