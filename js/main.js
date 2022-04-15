/* global data */
/* exported data */

var theForm = document.querySelector('#form');
// var src = thePhotoUrl.getAttribute('src');
var setPhotoUrl = document.querySelector('#photo');
theForm.addEventListener('paste', function (event) {
  var thePhotoValue = theForm.elements.photoUrl.value;
  setPhotoUrl.setAttribute('src', thePhotoValue);
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
});

// test image https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png
// test image 2 https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/440px-Pok%C3%A9mon_Pikachu_art.png
