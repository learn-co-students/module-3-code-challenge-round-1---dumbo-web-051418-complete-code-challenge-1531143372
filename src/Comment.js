class Comment {
  constructor(data) {
    this.id = data.id
    this.content = data.content
  }



  el() {
    return `<li>${this.content}</li>`
  }
}
