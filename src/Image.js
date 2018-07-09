class Image {
  constructor (data) {

    this.id = data.id
    this.url = data.url
    this.name = data.name
    this.like_count = data.like_count
  }

  el() {
    return `<img src=${this.url} ><h4 id="${this.name}">${this.name}</h4>`
  }

  likeEl() {
    return `<span>Likes:
      <span id="likes">${this.like_count}</span>
    </span>
    <button id="like_button">Like</button>`
  }

}
