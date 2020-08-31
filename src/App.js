import React from 'react';
class App extends Component {
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'black', id: 1}
      {name. 'Yoshi', age: 20, belt: 'green', id: 2}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    )
  }
}

export default App;
