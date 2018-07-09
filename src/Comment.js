class Comment {
  constructor(comment){
    this.content = comment.content
    this.id = 4
  }

  el(){
    const liTag = document.createElement('li')
    liTag.innerHTML = this.content

    return liTag
  }

  static getInputs(){
    const commentInput = document.querySelector('#comment_input').value
    const commentObj = {content: commentInput}
    Adapter.createComment(commentObj)
      .then((comment) => {
        Comment.renderComment(comment)
      })
  }

  static renderComment(comment) {
    const newComment = new Comment(comment)
    const commentsLocation = document.querySelector('#comments')

    commentsLocation.append(newComment.el())
  }
}
