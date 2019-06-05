function choice(items) {
  // returns a randomly selected item from array of items
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items, item) {
  //removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0,i), ...items.slice(i + 1)];
    }
  }
}

// default export allows you to export and reference with whatever name you want
// export default helpful;
// destructured exports will explicitly be called in other files
export { choice, remove };