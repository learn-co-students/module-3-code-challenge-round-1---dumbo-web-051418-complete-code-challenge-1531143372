document.addEventListener('DOMContentLoaded', function() {

  // define urls:
  const imageId = 9 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  // identify targeted UI elements
  const commentSection = document.getElementById('comments')
  const imageSection = document.getElementById('image_card')
  const img = document.getElementById('image')
  const likeBtn = document.getElementById('like_button')
  const commentInput = document.getElementById('comment_input')
  let dataCounter = 0

  // fetch my image data
  fetch(imageURL)
  .then(r => r.json())
  .then((data)=>{
    console.log(data)

    let imageDiv = document.createElement('div')

    // set a counter for my like btn
    dataCounter = data.like_count

    // img.setAttribute("src","${data.url}")

    imageDiv.innerHTML = `
      <img src='${data.url}' data-id>
      <h4> ${data.name} </h4>
      <p id="like"> Likes: ${dataCounter} </p>
    `
    imageSection.append(imageDiv)
  })

  // create my like eventListener:
  likeBtn.addEventListener('click',(e)=>{
    console.log(e)
    // I want to return a function an IFFE that increments by one each time
    return (function likeCounter(){
      let likes = document.getElementById('like')
      console.log(likes)
      let increment = ++dataCounter
      likes.innerHTML = `Likes: ${increment}`

      // make the post request to like
      fetch('likeURL', {
        method:"POST",
        headers:{
            Accept: 'applicaton/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
           // I would have passed the like value here po
        })
      })
    })();
  });


    // I would have completed my comments herre in a eventListner here with callback

    comment_input.addEventListener('submit', (e)=>{

      //select the comment input

      // get the value on a submit event

      // pass that value to a fetch request that updates my backend

      // add the comment to a comment div

      // append the comment div to the comments UL

    });

});
