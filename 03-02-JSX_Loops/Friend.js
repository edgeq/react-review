class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props
    return (
    <div>
      <h1>{name}</h1>
      <ul>
        {/* We need to keep destructured data in {}s  
            Also need to add an index {i} to each new item       
        */}

       { hobbies.map((h, i) => <li key={i}>{h}</li>)}
       
      </ul>
    </div>
    )
  }
}