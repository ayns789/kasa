// import logo from './logo.svg';
import './App.css';
import Description from './components/Description';

function App() {
  const titles = ['je suis un titre', 'je suis en 1er', 'je suis en 2e'];
  return (
    <div>
      <h1>Hello !</h1>
      {titles.map((title) => (
        <Description key={title} title={title} />
      ))}
    </div>
  );
}

export default App;
