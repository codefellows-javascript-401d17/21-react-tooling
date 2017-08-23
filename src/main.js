import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class CowBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cow: ''
    }
    this.ipsum = this.ipsum.bind(this);
  };

  ipsum(e) {
    let nonsense = faker.lorem.words();

    this.setState(state => {
      return {
        cow: cowsay.say({
          text: nonsense
        })
      }
    })
  }

  render() {
    return(
      <div className="test">
        <button onClick={this.ipsum}>'Click Me'</button>
        <pre>{this.state.cow}</pre>
      </div>
    )
  }


};

class CowHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CowHead />
        <CowBody />
      </div>
    )
  }
};

ReactDom.render(<App />, document.getElementById('root'));
