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
        text: faker.lorem.words(20),
      }),

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
      return {
        cowsay: cowsay.say({
          text: faker.lorem.words(20),
        }),
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Generate Lorem Ipscow</h2>
        <button onClick={this.handleClick}>Click Dis</button>
        <pre>{this.state.cowsay}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
