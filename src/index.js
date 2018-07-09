document.addEventListener('DOMContentLoaded', function() {

  const imageId = 16 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


  // FETCH PROMISE & GET DATA
const dataBase = [] // not working
fetch(imageURL)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
          console.error("A+");
      })

  /// MANIPULATE DOM TO THEN ADD IMAGE TO THE PAGE
  function loadImage(data, id) {
    let imgPlace = document.createElement('img')
    imgPlace.innerHTML = function() {
      return `
      <img src="./flatiron-school-logo.png" id="image" data-id=${data.id}/>
    `})

     // MANIPULATE A SUBMIT BUTTON
     // WOULD LOG THE DATA TO LOCALSTORAGE SO IT MAY PERSIST.

    const addItems = document.querySelector('.comment-form');
    const comments = [];

    function addComment(e){
      e.preventDefault();
      const text = this.querySelector('[name=comment]').value;
      const comment = {
        text: text,
      }

      comments.push(comment);
      // ADD TO LOCAL STORAGE
      localStorage.setItem('comments', JSON.stringify(comments));
      this.reset();
    }

    addItems.addEventListener('submit', addComment);

    // FIRE OFF IMAGE WHEN DOM LOADS
    loadImage(dataBase, imageId)

})
