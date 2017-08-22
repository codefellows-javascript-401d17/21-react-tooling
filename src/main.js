import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowsay: cowsay.say({
        text: 'Mooooo'
      })
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return {
        cowsay: cowsay.say({
          text: faker.lorem.words(4)
        })
      }
    });
  }

  render() {
    return(
      <div>
        <button onClick={ this.handleClick}>Cowsay!</button>
        <pre>{this.state.cowsay}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
