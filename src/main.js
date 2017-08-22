import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1>Cow Say App</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: cowsay.say({
        text: faker.lorem.words(5)
      }),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return { words: cowsay.say({
        text: faker.lorem.words(3)
        })
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <button onClick={this.handleClick}>'wut duz kow sae?'</button>
        <pre>{this.state.words}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));