class Adapter {

  static baseImgUrl() {
    return `https://randopic.herokuapp.com/images/`
  }

  static baseCmtUrl() {
    return "https://randopic.herokuapp.com/comments/"
  }

  static baseLikesUrl() {
    return "https://randopic.herokuapp.com/likes/"
  }

  static getImage(id) {
    return fetch(this.baseImgUrl()+id)
      .then(res => res.json())
  }

  static getImageComments(image_id) {
    return fetch(this.baseImgUrl()+image_id)
      .then(res => res.json())
  }

  static getImageLikes(image_id) {
    return fetch(this.baseImgUrl()+image_id)
      .then(res => res.json())
  }

  static createComment(comment) {
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }
    return fetch(this.baseCmtUrl(), options)
      .then(res => res.json())
  }

  static updateImgLikeCount(likeCount) {
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(likeCount)
    }
    return fetch(this.baseLikesUrl(), options)
      .then(res => res.json())
  }

}
