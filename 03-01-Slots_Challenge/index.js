function runSlots(){
  let slots = ["\u{1F348}", "\u{1F347}", "\u{1F34F}"];
  return slots[Math.floor(Math.random() * slots.length)].toString();
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Machine
          s1={runSlots()}
          s2={runSlots()}
          s3={runSlots()}
        />
        <Machine
          s1={runSlots()}
          s2={runSlots()}
          s3={runSlots()}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))