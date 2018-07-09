document.addEventListener('DOMContentLoaded', function() {
  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  ImageController.init();

  const imgCard = document.getElementById("image_card");

  const form = document.getElementById("image_card");

  imgCard.addEventListener("click", function(event){

    if(event.target.nodeName === "BUTTON"){
      const parent = event.target.parentNode;
      const image = parent.querySelector("img");
      const imageId = image.dataset.id;
      parent.querySelector("#likes").innerHTML = parseInt(parent.querySelector("#likes").innerHTML) + 1;
      Adapter.likeImage(imageId);
    }
  });

  form.addEventListener("submit", function(event){
    if(event.target.id === "comment_form"){
      event.preventDefault();
      const parent = event.target;
      const div = parent.parentNode;
      const commentInput = parent.querySelector("#comment_input");
      const comment = commentInput.value;
      const ul = div.querySelector("#comments");
      ul.innerHTML = `<li>${comment}</li>` + ul.innerHTML;
      Adapter.addComment(imageId, comment);
    }
  });

})
