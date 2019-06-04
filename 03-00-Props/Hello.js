class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1
  }
  render() {
    /**
     * Props come from index.js through the App component
     */
    console.log(this.props)
    // const { to, from } = this.props (you can destructure this.props too...)
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div className="hello-container">
        <h1>Hi {this.props.to} from {this.props.from}{bangs}</h1>
        {this.props.img ?
          <img src={this.props.img} />
        :
          'Sup dawg'}
      </div>
    )
  }
}