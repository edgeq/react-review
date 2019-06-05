function helpful() {
  console.log('I did a helpful thing');
}

function sort() {
  console.log('sort function')
}
function save() {
  console.log('save function')
}

// default export allows you to export and reference with whatever name you want
export default helpful;
// destructured exports will explicitly be called in other files
export { sort, save};