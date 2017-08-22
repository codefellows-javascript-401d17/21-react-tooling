import React from 'react'; //use jsx
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';
//render jsx

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: cowsay.say({text: faker.lorem.paragraph(4)})
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      count: cowsay.say({text: faker.lorem.sentence(5)})
    })
  }

  render() {
    return (
      <div>
        <pre onClick={this.handleClick}> {this.state.count} </pre>
          
      </div>
    )
  }
}

ReactDom.render(
  <App />, document.getElementById('root'), function () {
    console.log('should have rendered');
  }
)
