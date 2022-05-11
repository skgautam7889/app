import './App.css';
import { add , sub , mul ,div} from './Cal';

function App() {
  return (
    <ol>
    <li>{add(40,20)}</li>
    <li>{sub(10,5)}</li>
    <li>{mul(10,30)}</li>
    <li>{div(100,30)}</li>
  </ol>
  );
}

export default App;
