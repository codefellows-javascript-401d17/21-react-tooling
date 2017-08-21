
import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowsay: cowsay.say({ text: 'I\'m a cow' })
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return {
        cowsay: cowsay.say({ text: faker.lorem.words(10) })
      }
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <button onClick={this.handleClick}>Click Me!</button>
        <pre>{this.state.cowsay}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
