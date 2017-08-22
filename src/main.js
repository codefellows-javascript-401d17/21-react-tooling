import React from 'react'; //use jsx
import ReactDom from 'react-dom'; //render jsx

ReactDom.render(
  <div>
    <h1>TEST</h1>
  </div>, document.getElementById('root'), function() {
    console.log('should have rendered');
  }
)
