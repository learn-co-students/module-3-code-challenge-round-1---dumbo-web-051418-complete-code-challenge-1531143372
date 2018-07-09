class Adapter {

  getImage(){
    const imageURL = `https://randopic.herokuapp.com/images/15`
    return fetch(imageURL)
      .then(r => r.json())
  }


  addlikes(obj){
    const imageURL = `https://randopic.herokuapp.com/likes`
    const bodyObj = {
      image_id: obj.id
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(bodyObj),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    return fetch(imageURL, options)
      .then(r => r.json())
  }

  addComment(content){
    const imageURL = `https://randopic.herokuapp.com/comments`
    const bodyObj = {
      image_id: 15,
      content: content
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(bodyObj),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    return fetch(imageURL, options)
      .then(r => r.json())
  }


}
