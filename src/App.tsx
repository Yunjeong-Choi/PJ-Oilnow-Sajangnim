import './App.css';
import Container from './components/container';
import Modal from './components/modal';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container />
      <Modal />
    </div>
  );
}

export default App;
