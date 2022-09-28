import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';
import Menu from './Components/Menu';
import News from './Components/News';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Allroutes />
      <div className='Appcomponent'>
        <div><Menu /></div>
        <div><News/></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
