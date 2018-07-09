class Adapter {

  static getImage(imageURL) {
    return fetch(imageURL)
    .then(response => response.json())
  }

  static updateLike(likeCount) {
    const likeURL = `https://randopic.herokuapp.com/likes/`;
    const imageId = 13
    const likeBody = {
      image_id: imageId,
      like_count: likeCount
    }
    const options = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(likeBody)
    }

    return fetch(likeURL, options)
    .then(response => response.json())
  }

  static updateComment(comment) {
    const commentsURL = `https://randopic.herokuapp.com/comments/`
    const imageId = 13;
    const commentBody = {
      image_id: imageId,
      content: comment
    };
    const options = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentBody)
    }

    return fetch(commentsURL, options)
    .then(response => response.json())
  }
}
