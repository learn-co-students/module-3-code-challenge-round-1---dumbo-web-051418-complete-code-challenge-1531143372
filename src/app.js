class App {
  constructor(data){
    this.image = new Image(data)
    this.comments = []
    data.comments.forEach(comment => {
      this.comments.push(comment)
    })
  }

  renderImage() {
    const imageCard = document.querySelector('#image_card')
    imageCard.innerHTML = ''
    imageCard.innerHTML += this.image.el()
    imageCard.innerHTML +=this.image.likeEl()
    this.image.likeEl()
  }

  handleLikes() {
    this.image.like_count+=1
  }

  render() {
    const imageCard = document.querySelector('#image_card')
    this.renderImage()
    imageCard.innerHTML += this.commentForm()
  }

  renderComments() {
    const comment = document.querySelector(`#comments`)
    comment.innerHTML += this.comments.forEach(comment => {comment.el()})
    // did not finish this function
  }


  commentForm() {
    return ` <form id="comment_form">
  <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
  <input type="submit" value="Submit"/>
  </form>`
  }

}
