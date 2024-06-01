import './main.css';
import Navbar from '../components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Text />
    </div>
  );
}

export default App;

function Text() {
  return (
    <div className="text">
      <p>app</p>
    </div>
  );
}