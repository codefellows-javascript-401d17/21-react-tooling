import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <header className='custom-header'>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicking');
    this.setState(
      {
        content: cowsay.say({
          text: faker.lorem.words(10)
        })
      }
    )
  }

  render() {
    return (
      <div>
        <Navbar />
        <p onClick={this.handleClick}>Content: {this.state.content}</p>
      </div>
    )
  }
};

ReactDom.render(<App />, document.getElementById('root'));
