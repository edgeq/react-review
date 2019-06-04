function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div className="numbers" data-id="pick-me">
        <h1>Your # is...{num}</h1>
        <p>{num === 7
        ?
          <img src="https://media3.giphy.com/media/6brH8dM3zeMyA/giphy.gif?cid=790b76115cf6c47a7855697245a4f90d&rid=giphy.gif" />
        :
          'Unlucky...'
            }</p>
      </div>
    );
  }
}

// ReactDOM.render(<NumPicker />, document.getElementById("root"));
