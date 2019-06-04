class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        {/* to and from are properties (props) specific to each instance of <Hello />
            each prop is passed into each specific instance
        */}
        <Hello />
        <Hello
          to="Ringo"
          from="Paul"
          bangs={3}
          data={[1,2,3,4,5]}
          isFunny
          img="https://source.unsplash.com/random"
          />
        <Hello to="Sonny" from="Cher" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))