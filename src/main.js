import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='cowsay-header'>
        <h1>My Cow Say App</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({ text: 'hello' })
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return {
        content: cowsay.say({
          text: faker.lorem.words(),
          e: 'oO',
          T: ' U'
        })
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <button onClick={this.handleClick}>wut duz kow sae?</button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
