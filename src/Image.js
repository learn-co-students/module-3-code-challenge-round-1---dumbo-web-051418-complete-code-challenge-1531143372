class Image {
  constructor(image) {
    this.id = image.id
    this.url = image.url
    this.name = image.name
    this.like_count = image.like_count
    this.comments = image.comments
  }

  renderImage(imageCard) {
    const imageEl = imageCard.querySelector("#image")
    imageEl.setAttribute("src", this.url)

    const title = document.createTextNode(this.name)
    const nameEl = imageCard.querySelector("#name")
    nameEl.appendChild(title)

    return

    const likesEl = document.querySelector("#likes")
    likesEl.innerHTML = imageData.like_count

    const commentsUlEl = document.querySelector("#comments")

    imageData.comments.forEach((comment) => {
      const liEl = document.createElement("li")
      const commentEl = document.createTextNode(comment.content)
      liEl.appendChild(commentEl)
      commentsUlEl.appendChild(liEl)
    })
  }

}
