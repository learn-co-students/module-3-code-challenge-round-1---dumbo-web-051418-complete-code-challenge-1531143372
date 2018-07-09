const imageURL = "https://randopic.herokuapp.com/images/2"

class Adapter {

  static getImage() {
    return fetch(imageURL).then(r => r.json())
  }

}
