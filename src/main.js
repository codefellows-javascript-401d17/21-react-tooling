import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Cowsay from 'cowsay-browser';
import Faker from 'faker';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    	cowsay: null
    };
    this.clickCowsay = this.clickCowsay.bind(this);
  }

  clickCowsay(e){
    this.setState(state => {
      return{
        cowsay: Cowsay.think({
          text: `My name is ${Faker.name.prefix()} ${Faker.name.findName()} I am ${Faker.name.title()}`
        })
      }
    });
  }

  render(){
    return(
      <section>
        <button onClick={this.clickCowsay}>click me</button>
        <pre>{this.state.cowsay}</pre>
      </section>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Generate Cowsay Lorem',
    };
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <Content />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
