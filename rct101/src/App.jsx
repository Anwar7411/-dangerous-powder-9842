
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';
import Home from './Pages/Home';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <div><Navbar /></div>
     <div><Allroutes /></div>
    </div>
  );
}

export default App;
