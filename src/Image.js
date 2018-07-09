class Image {

  constructor(image) {
    this.id = image.id
    this.url = image.url
    this.name = image.name
    this.like_count = image.like_count
    this.comments = image.comments
  }


  // const imageCard = document.querySelector("#image-card")

  // <div id="image_card" class="card col-md-4">
  //     <img id="image" data-id/>
  //     <h4 id="name"></h4>
  //     <span>Likes:
  //       <span id="likes">0</span>
  //     </span>
  //     <button id="like_button">Like</button>
  //     <form id="comment_form">
  //       <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
  //       <input type="submit" value="Submit"/>
  //     </form>
  //     <ul id="comments">
  //
  //     </ul>
  // </div>

  static imgEl() {
      let imageCardDiv = document.createElement("div")
      imageCardDiv.className = "image-card"
      let theImg = document.createElement("img")
      theImg.id ="image"
      theImg.dataset.id = `${this.id}`

      let imageName = document.createElement("h4")
      imageName.id = `${this.name}`
      let likes = document.createElement("span")
      likes.id = "Likes"
      likes.innerHTML = `${this.like_count}`
      let likeButton = document.createElement("button")
      likeButton.id = "like_button"
      likeButton.innerHTML = "Like"
      let commentForm = document.createElement("form")
      let formInput = document.createElement("input")
      let formSubmit = document.createElement("input")
      let commentList = document.createElement("ul")


      imageCardDiv.append(theImg, imageName, likes, likeButton, commentForm, formInput, formSubmit, commentList)

      return imageCardDiv
      }

      // tried to make the div, it's hard.

    static renderLikes(){
      like_count === this.like_count
    }


  }
