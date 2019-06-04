class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Hello />
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
