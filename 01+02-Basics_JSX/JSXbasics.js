function getMood() {
  const moods = ['Angry', 'Sad', 'Frustrated', 'Jovial', 'Stressed', 'Everything is fine'];
  return moods[Math.floor(Math.random() * moods.length)].toLowerCase()
}
class JSXDemo extends React.Component {
  render() {
    return (
      /**
       * You need to return a single JSX/HTML element per each Component
       */
    //   <div>
    //     <h1>My image</h1>
    //     <img src="https://source.unsplash.com/random" />

    //    <h1>My number is {33 / 3}</h1>
    //   </div>

    <h3>Current mood: {getMood()}</h3>


    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))