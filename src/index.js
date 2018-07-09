document.addEventListener('DOMContentLoaded', function() {

  const imageId = 14 //assigned ID was 14
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

//grabbing elements off the dom
const imgContent = document.getElementById('image_content');
const likeButton =
document.getElementById('like_button');
const likeCount = document.getElementById('likes');
const commentForm = document.getElementById('comment_form');
const commentInput = document.getElementById('comment_input');
const bigDiv = document.querySelector('div.container');
const commentList = document.createElement('ul');
//doing this here so it only happens once
  bigDiv.appendChild(commentList);
//dom el done

const renderImage = (jsonResponse) => {
  let imgDiv = document.createElement('div')
  let imgHtml = `<img src=${jsonResponse.url}></img><h4>${jsonResponse.name}</h4>`
  //rendering likes here too
  let likes = jsonResponse.like_count.toString()
  likeCount.innerText = likes;
  imgDiv.innerHTML = imgHtml;
  imgContent.prepend(imgDiv);
  /* i would have iterated over my fetched comment collection here
  to add them to the page one by one in a UL */
  //rendering the comment ul here
  // let aComment = document.createElement('li')
  // aComment.innerText = jsonResponse.content
}

const likeImage = () => {
  let i = parseInt(likeCount.innerText);
    i++;
  likeCount.innerText = i.toString();
  postLike(i);
}

const makeComment = (event) => {
  event.preventDefault();
  let newComment = document.createElement('li');
  newComment.innerText = commentInput.value;
  commentList.appendChild(newComment);
  postComment(newComment);
  commentForm.reset();
}

//event listeners
likeButton.addEventListener('click', likeImage);
commentForm.addEventListener('submit', makeComment);
// el done

//

const postLike = (like) => {
    fetch('https://randopic.herokuapp.com/likes/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      image_id: '14',
      })
    })
    .then(resp => resp.json())
}


//i would actually want the list of comments in here to be a collection
//most likely an array
//so that when i render the comments on to the page i can iterate through them
const postComment = (comment) => {
    fetch('https://randopic.herokuapp.com/comments/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      image_id: '14',
      content: comment.innerText
      })
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

//fetch request to grab image
  fetch(imageURL)
   .then(resp => resp.json())
   .then(resp => renderImage(resp))

})
