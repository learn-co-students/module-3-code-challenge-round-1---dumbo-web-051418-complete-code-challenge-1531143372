class Adapter {

  static getImageData(){
    const imageURL = `https://randopic.herokuapp.com/images/4`
    return fetch(imageURL)
      .then(req => req.json())
  }

  static addLikes(id){
    const likesURL = `https://randopic.herokuapp.com/likes`
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {'image_id': `${id}`}
    }
    return fetch(likesURL, options)
      .then(req => req.json())
  }

  static createComment(commentObj) {
    const commentsURL = `https://randopic.herokuapp.com/comments/`
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        'image_id': `${commentObj.id}`,
        'content' : `${commentObj.content}`
      }
    }
    return fetch(commentsURL, options)
      .then(req => req.json())
  }

}
