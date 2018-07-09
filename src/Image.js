class Image {
  constructor(image){
    this.id = image.id
    this.url = image.url
    this.name = image.name
    this.like_count = 0
    this.comments = []
  }

  static renderImage(image){
    const newImage = new Image(image)
    const imgLocation = document.querySelector('#image_card')
    imgLocation.append(newImage.el())
  }

  //increment like by 1 -- works
  static renderLikes(data){
    const likesLocation = document.querySelector('#likes')
    let currLikes = likesLocation.innerHTML
    let currLikesInt = parseInt(currLikes)
    currLikesInt += 1
    likesLocation.innerHTML = currLikesInt
  }

  el() {
  const divTag = document.querySelector('#image_card')

  const imgTag = document.createElement('img')
  imgTag.id = "image"
  imgTag.src= this.url
  imgTag.dataset.id = `${this.id}`

  const h4Tag = document.createElement('h4')
  h4Tag.id = "name"

  const spanTag = document.createElement('span')
  spanTag.innerText = "Likes:"

  const spanTagInner = document.createElement('span')
  spanTagInner.id = "likes"
  spanTag.innerText = this.like_count

  spanTag.append(spanTagInner)

  const buttonTag = document.createElement('button')
  buttonTag.id = "like_button"
  buttonTag.innerText = "Like"
  buttonTag.dataset.id = this.id

  const formTag = document.createElement('form')
  formTag.id = "comment_form"

  const inputTagId = document.createElement('input')
  inputTagId.id = "comment_input"
  inputTagId.type = "text"
  inputTagId.placeholder = "Add Comment"

  const inputTagSubmit = document.createElement('input')
  inputTagSubmit.id = this.id
  inputTagSubmit.type = "submit"
  inputTagSubmit.value = "Submit"

  formTag.append(inputTagId, inputTagSubmit)

  divTag.append(imgTag, h4Tag, spanTag, buttonTag, formTag)

  return divTag

}
  }
