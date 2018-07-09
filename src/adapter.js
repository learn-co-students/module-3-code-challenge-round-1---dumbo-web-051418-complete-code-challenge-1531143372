class Adapter {


  getImage() {
    const baseURL = `https://randopic.herokuapp.com/images/6`
    return fetch(baseURL)
      .then((r) => r.json())
  }

  postLikes(id) {
    const baseURL = `https://randopic.herokuapp.com/likes`
    const options = {
      method: `POST`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    }
    return fetch(baseURL, options)
      .then((r)=> r.json())
  }

}
