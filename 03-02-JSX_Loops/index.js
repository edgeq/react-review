class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Elton"
          hobbies={['Piano', 'Singin', 'Dancing']}

        />
        <Friend
          name="Frieda"
          hobbies={['Drawing', 'Painting', 'Justice']}

        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))