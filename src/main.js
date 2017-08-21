import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
      <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class CowsayLorem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: faker.lorem.words(),
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.setState(state => {
      return {text: faker.lorem.words()}
    });
  }

  render() {
    const cow = cowsay.say({ text: this.state.text });
    return (
      <div>
        <Navbar />
        <pre>
          {cow}
        </pre>
        <button type ='button' onClick = {this.handleClick}>click me</button>
      </div>
    )
  }
}

ReactDOM.render(<CowsayLorem />, document.getElementById('root'))
