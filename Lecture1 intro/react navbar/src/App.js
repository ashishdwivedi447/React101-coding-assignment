import logo from './logo.svg';
import './App.css';
import {Logo} from "./components/Logo";
import {Links} from "./components/Links"
import {Button} from "./components/Button"

function App() {
  return (
    <div className="App">
    <div className="navbardiv">
      <div><Logo/></div>
      <div><Links/></div>
      <div><Button/></div>
    </div>
    </div>
  );
}

export default App;
