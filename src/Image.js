class Image {
  constructor(obj){
    this.id = obj.id
    this.url = obj.url
    this.name = obj.name
    this.like_count = obj.like_count
    this.comments = obj.comments
  }

  imgEl(){
    return `
    <img id="image" data-id="${this.id}" src="${this.url}"/>
    <h4 id="img-name">${this.name}</h4>
    <span>Likes:
      <span id="likes">${this.like_count}</span>
    </span>
    <button id="like-button">Like</button>
    <form id="comment-form">
      <input id="comment-input" type="text" name="comment" placeholder="Add Comment"/>
      <button type="submit" value="Submit"/>Submit</button>
    </form>
    <ul id="comments">
      <h5>Comments</h5>
    </ul>
    `
  }

  comment(commentID){
    return `<li>${this.comments["id"][commentID]}</li>`
  }
}
