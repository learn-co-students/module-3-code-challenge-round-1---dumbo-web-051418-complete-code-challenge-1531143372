class Comment {
  constructor(commentObj) {
    this.comments = commentObj.comments
    this.id = commentObj.id
  }

  el() {
    const commentDiv = document.createElement("div")
      commentDiv.className = "comment-card"
      commentDiv.id = `comment-card-${this.id}`

      const comment = document.createElement("input")
      commentInput.type = "text"
      commentInput.value = this.comments
      commentInput.dataset.id = this.id

      commentInput.addEventListener("click", Controller.onNewComment)

      commentDiv.append(comment)

      return commentDiv
  }

}
