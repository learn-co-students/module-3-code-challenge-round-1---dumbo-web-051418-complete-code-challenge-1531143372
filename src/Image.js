class Image {
  constructor(imageObj){
    this.id = imageObj.id
    this.url = imageObj.url
    this.like_count = imageObj.like_count
    this.comments = imageObj.comments
  }

  static showImage(imageId){
    // console.log(imageId)
    Adapter.getImage(imageId)
      .then(r => {
        // console.log(r)
        let imageLocation = document.getElementById('image_card')

        let image = document.createElement('img')
        image.setAttribute('src', r.url)

        imageLocation.append(image)

        let likeButton = document.getElementById('like_button')
        likeButton.addEventListener('click', function(e){
          e.preventDefault();
          // console.log(r)

          let likeCount = document.getElementById('likes')
          // console.log(r)

          r.like_count += 1
          // console.log(r.like_count) //r is the imageObj
          likeCount.innerHTML = ''
          likeCount.innerHTML += r.like_count

          console.log(r.id)

          //call Adpater to make POST request updating the image object with
          //new like_count
          Adapter.editImage(r)
            // .then(r => console.log('hi',r))

        })
      })
  }

  static commentImage(){
    let commentSubmit = document.getElementById('comment_form')
    let commentInput = document.getElementById('comment_input')
    commentSubmit.addEventListener('submit', function(e){
      e.preventDefault();
      console.log(commentInput.value)

      let commentLocation = document.getElementById('comments')
      let newComment = document.createElement('li')
      newComment.innerHTML = commentInput.value

      commentLocation.appendChild(newComment)

      //call Adapter to update DB with commentObj passing in the comment
      // let newComment = new Comment({id: 1, content: commentInput.value})
      // Adapter.createComment(newComment)
      //   .then(r => console.log(r))

    })
  }

}
