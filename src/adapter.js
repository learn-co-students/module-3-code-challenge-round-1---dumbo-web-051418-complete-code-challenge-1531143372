const imageId = 10; //Enter your assigned imageId here
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = "https://randopic.herokuapp.com/likes";
const commentURL = "https://randopic.herokuapp.com/comments";

class Adapter {
  static getImage(){
    return fetch(imageURL)
      .then(data => data.json());
  }

  static likeImage(image_id){
    let options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"image_id": image_id})
    };
    return fetch(likeURL, options);
  }

  static addComment(image_id, comment){
    let options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"image_id": image_id, content: comment})
    };
    return fetch(commentURL, options);
  }
}
