import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import cowsay from 'cowsay-browser'
import faker from 'faker'

class CowBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cow: ''
    }
    this.newIpsum = this.newIpsum.bind(this);
  }

  newIpsum(e) {
    let ipsum = faker.lorem.sentence();

    this.setState(state => {
      return {
        cow: cowsay.think({
          text: ipsum
        })
      }
    })
  }

  render() {
    return(
      <div className="test">
        <button onClick={this.newIpsum}>'Please Click Meeeeeee'</button>
        <pre>{this.state.cow}</pre>
      </div>
    )
  }


}

class CowHead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='header'>
        <h1>Gerate Cowsay Lorem</h1>
      </header>
    );
  }
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
    );
  }
}






ReactDom.render(<App />, document.getElementById('root'));
