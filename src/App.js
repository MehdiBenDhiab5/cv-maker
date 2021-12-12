import React from 'react';
import Cv from './components/Cv';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Cv />
      </div>
    );
  }
}

export default App;
