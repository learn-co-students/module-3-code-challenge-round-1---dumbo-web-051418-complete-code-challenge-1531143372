class Adapter{

  //gets image via id
  static getImage(imageId){
    const baseURL = `https://randopic.herokuapp.com/images/${imageId}`

    return fetch(baseURL)
      .then(r => r.json())
  }

  static editImage(imageObj){
    const baseURL = `https://randopic.herokuapp.com/images`
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },

      body: {image_id: imageObj.id}
    }

    return fetch(baseURL, options)
      .then(r => console.log(r))
  }

  static createComment(commentObj){
    const baseURL = `https://randopic.herokuapp.com/comments`
    const options = {
      method: "POST",
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      body: {
        image_id: commentObj.id,
        content: commentObj.content
      }
    }

    return fetch(baseURL, options)
      .then(r => console.log(r))
  }

}
