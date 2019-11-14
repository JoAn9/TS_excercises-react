import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

// 1
const App = (props: AppProps): JSX.Element => {
  const [counter, setCount] = useState(0);
  const onIncrement = () => setCount(counter + 1);

  return (
    <>
      <button onClick={onIncrement}>Increment</button>
      {counter}
    </>
  );
};

// 2
class App2 extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>        
        {this.state.counter}
      </div>
    );
  }
}

// 3
class Ap3 extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>        
        {this.state.counter}      
      </div>
    );
  }
}
ReactDOM.render(<App color="red" />, document.getElementById('root'));
