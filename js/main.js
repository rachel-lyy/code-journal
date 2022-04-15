/* global data */
/* exported data */

var theForm = document.querySelector('#form');
var photo = document.querySelector('#photo');
var photoUrl = document.querySelector('#photoUrlId');

// var thePhotoValue = theForm.elements.photoUrl.value;
photoUrl.addEventListener('input', function (event) {
  if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(photoUrl.value) === true) {
    photo.src = photoUrl.value;
  } else {
    photo.src = 'images/placeholder-image-square.jpg';
  }
});

theForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var title = theForm.elements.title.value;
  var notes = theForm.elements.notes.value;
  var thePhotoValue = theForm.elements.photoUrl.value;
  var newEntry = {
    title: title,
    photoUrl: thePhotoValue,
    notes: notes,
    entryId: data.nextEntryId++
  };
  var array = data.entries;
  array.push(newEntry);
  theForm.reset();
  photo.src = 'images/placeholder-image-square.jpg';
});

// test image https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png
// test image 2 https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/440px-Pok%C3%A9mon_Pikachu_art.png
