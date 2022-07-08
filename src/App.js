import { React } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { FieldInput } from './features/input/FieldInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <FieldInput />
      </header>
    </div>
  );
}

export default App;
