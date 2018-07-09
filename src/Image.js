class Image {
  constructor(image){
    this.id = image.id;
    this.url = image.url;
    this.name = image.name;
    this.like_count = image.like_count;
    this.comments = image.comments.sort(function(a, b){return b.id - a.id});

  }

  htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  el(){
    let comments = "";
    console.log(this.comments);
    // debugger
    this.comments.forEach(function(comment){
      comments += `<li>${comment.content}</li>`;
    });
    return `
    <img id="image" data-id=${this.id} src="${this.url}"/>
    <h4 id="name">${this.name}</h4>
    <span>Likes:
      <span id="likes">${this.like_count}</span>
    </span>
    <button id="like_button">Like</button>
    <form id="comment_form">
      <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
      <input type="submit" value="Submit"/>
    </form>
    <ul id="comments">
    `
    +
      comments
    +
    `</ul>`;
  }
}
