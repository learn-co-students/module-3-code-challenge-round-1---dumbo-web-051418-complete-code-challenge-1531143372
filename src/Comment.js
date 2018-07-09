class Comment {

  constructor(comment) {
    this.id = comment.id
    this.content = comment.content
    this.image_id = comment.image_id
  }

  static renderComment(comment) {
    const commentList = document.querySelector("comments")
    const newComment = new Comment(comment)
    commentList.innerHTML += newComment

  }

  static postComment(comment){
    Adapter.createComment
      .then(Comment.renderComment())
  }

}
