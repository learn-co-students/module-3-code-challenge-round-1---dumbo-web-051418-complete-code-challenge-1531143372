class CommentController{

  static renderComments(image) {
    const commentsUL = document.querySelector("#comments");
    image.comments.forEach(comment => {
      const commentLI = document.createElement('li');
      commentLI.setAttribute('id', `comment-${comment.id}`)
      commentLI.innerHTML = `${comment.content}`;
      commentsUL.appendChild(commentLI)});
    }

  static updateComment(comment) {
    const commentsUL = document.querySelector("#comments");
    const commentLI = document.createElement('li');
    commentLI.innerHTML = `${comment}`;
    commentsUL.appendChild(commentLI);
    Adapter.updateComment(comment)

  }
}
