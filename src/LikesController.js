class LikesController {

  static renderLikes(image) {
    const likeTag = document.querySelector("#likes");
    let likeCount = image.like_count;
    likeTag.innerHTML = `${likeCount}`;
    const likeButton = document.querySelector("#like_button");
    likeButton.addEventListener('click', e => {
      likeCount += 1

      likeTag.innerHTML = `${likeCount}`;
      this.updateLike(likeCount)
    })

  }

  static updateLike(likeCount) {

    Adapter.updateLike(likeCount)
    

  }
}
