import './App.css';

import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="App">
      
      <h2>Forms</h2>

      <div>
        <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "Eu sou um advogado", role: "admin",}}/>
      </div>

    </div>
  );
}

export default App;
