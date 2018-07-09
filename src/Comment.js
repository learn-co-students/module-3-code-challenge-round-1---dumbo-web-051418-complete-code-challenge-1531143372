class Comment {

  constructor({id, image_id, content, created_at, updated_at}) {
    this.id = id
    this.image_id = image_id
    this.content = content
    this.created_at = created_at
    this.updated_at = updated_at
  }

  render() {
    return `<li data-id="${this.id}" data-imageId="${this.image_id}">
              ${this.content}
          </li>`
  }

}
