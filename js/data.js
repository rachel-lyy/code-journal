/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleOnLoad);
function handleOnLoad(e) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('form-local-storage', dataJSON);
}

var previousdataJSON = localStorage.getItem('form-local-storage');

if (previousdataJSON !== null) {
  data = JSON.parse(previousdataJSON);
}
