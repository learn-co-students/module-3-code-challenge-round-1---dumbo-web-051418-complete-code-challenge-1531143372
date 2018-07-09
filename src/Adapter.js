class Adapter {

  static getImageInfo(){
    const baseURL="https://randopic.herokuapp.com/images/3"
  fetch(baseURL)
    .then(response =>response.json())
  }
  static createComment(comment) {
  const baseURL = "https://randopic.herokuapp.com/comments"
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(comment)
  }
  return fetch(baseURL, options)
    .then(response => response.json())
}
  static getLike(comment) {
    const baseURL = "https://randopic.herokuapp.com/likes"
    const options = {
      {
  image_id: <http://blog.flatironschool.com/wp-content/uploads/2016/10/Code-Background-352x200.jpg>
}
      method: "POST",
      headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
,
      body: JSON.stringify(comment)
  }
  return fetch(baseURL, options)
    .then(response => response.json())
}

}
