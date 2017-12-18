import React from 'react';
import ReactDOM from 'react-dom';
import Tables from './tables';

class Root extends React.Component {
  render() {
    return(
      <div>
        <Tables />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});


