import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    let ipsum = faker.lorem.sentence();
    this.state = {
      ipsum: ipsum,
      content: cowsay.say({
        text: ipsum
      }),
      cow: 'default'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  handleClick(e) {
    let ipsum = faker.lorem.sentence();
    this.setState(state => {
      return {
        ipsum: ipsum,
        content: cowsay.say({
          text: ipsum,
          f: this.state.cow
        }),
      };
    });
  }

  handleSelectionChange(e) {
    let cow = document.getElementById('cows').value;

    this.setState(state => {
      return {
        content: cowsay.say({
          text: this.state.ipsum,
          f: cow
        }),
        cow: cow
      };
    });
  }

  render() {
    let cowOptions;
    
    cowsay.list((error, cows) => {
      cowOptions = cows.map(cow => <option value={cow}>{cow}</option>);
    });

    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <select id="cows" defaultValue="default" onChange={this.handleSelectionChange}>{cowOptions}</select>
        <button onClick={this.handleClick}>generate</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}
  
ReactDom.render(<App />, document.getElementById('root'));