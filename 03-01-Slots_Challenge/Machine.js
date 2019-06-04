class Machine extends React.Component {
  render() {
    console.log(this.props)
    const { s1, s2, s3 } = this.props

    return (
      <div>
        <h1>{s1}{s2}{s3}</h1>
        {s1 === s2 && s2 === s3 ?
          <img src="https://media.giphy.com/media/nIM0pmYCPZ11S/giphy.gif" />
        : <img src="https://media.giphy.com/media/3oFzmko6SiknmpR2NO/giphy.gif" /> }
      </div>
    )
  }
}