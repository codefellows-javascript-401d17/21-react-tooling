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
      <header className='my-header'>
        <h1>CowSay App</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({
        text: faker.lorem.sentence(20),
      }),

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
      return {
        content: cowsay.say({
          text: faker.lorem.sentence(20),
        }),
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <h2>Generate Cowsay Lorem</h2>
        <button onClick={this.handleClick}>Click Here</button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
