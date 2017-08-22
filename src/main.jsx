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
      value: 'cow'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e) {
    this.setState(state => {
      return {text: faker.lorem.words()}
    });
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    const cow = cowsay.say({ text: this.state.text , f: this.state.value });
    return (
      <div id = 'all'>
        <Navbar />
        <pre>
          {cow}
        </pre>
        <div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='cow'>Cow</option>
            <option value='tux'>Tux</option>
            <option value='koala'>Koala</option>
            <option value='moose'>Moose</option>
            <option value='vader'>Vader</option>
          </select>
          <button type ='button' onClick = {this.handleClick}>click me!!!</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<CowsayLorem />, document.getElementById('root'))
