import logo from './logo.svg';
import './App.css';
import TestComponent1 from './components/TestComponent1';
import TestComponent2 from './components/TestComponent2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent1 />
        <TestComponent2 />
      </header>
    </div>
  );
}

export default App;
