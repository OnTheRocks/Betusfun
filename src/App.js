import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Schedule from './components/Schedule';
import TeamInfo from './components/TeamInfo';
import TeamStats from './components/TeamStats';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Schedule /> */}
      <TeamInfo />
      <TeamStats />
    </div>
  );
}

export default App;

