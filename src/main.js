import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

var cowsay = require("cowsay-browser");
var faker = require('faker');


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cows: cowsay.say({
	text : faker.lorem.word()
})
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState(state => {
      return { cows: cowsay.think({
	text : faker.lorem.word()
})}
    });
  }
  render() {
    return(
      <div>
      <button onClick={this.handleClick}>Click me!</button>
      <pre>{this.state.cows}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
