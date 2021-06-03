import './App.css';
import Menu from './components/menu';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <main>
        <Routes/>
      </main>
    </div>
  );
}

export default App;
