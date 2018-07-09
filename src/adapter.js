class Adapter {
  renderImage() {
    const imageId = 11 //Enter your assigned imageId here

    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

    return fetch(imageURL).then(r => r.json())
  }

  persistLikes(updatedLikes) {
    const imageId = 11 //Enter your assigned imageId here
    const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
    const likeURL = `https://randopic.herokuapp.com/likes/`
    // const commentsURL = `https://randopic.herokuapp.com/comments/`

    const data = {image_id: imageId, like_count: updatedLikes}

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(likeURL, options)
    .then(r => r.json())
  }

  renderLikes() {

  }


}
