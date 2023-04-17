//components
import FirstComponent from './Components/FirstComponent';
import TemplateExpressions from './Components/TemplateExpressions';
import Events from './Components/Events';
import Challenge from './Components/Challenge';

//styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />

      <Challenge/>
    </div>
  );
}

export default App;
