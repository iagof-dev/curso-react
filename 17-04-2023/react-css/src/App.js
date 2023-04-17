import './App.css';
import Title from './Components/Title';

function App() {
  const n = 10;
  const redTitle = true;
  return (
    <div className="App">
      {/* "CSS GLOBAL" */}
      <h1 className="center">Arquivo CSS</h1>
      {/* CSS INLINE */}
      <h2 style={{ color: "blue", borderTop: "2px solid red"}}>Css INLINE</h2>

      {/* CSS INLINE DINÂMICO */}
      <h2 style={n<10 ? {color: "purple"} : {color: "pink"}}>CSS DINAMICO</h2>

      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>

      {/* CSS MODULES */}
      <Title />
      <h1 className="my_title">Meu titulo com o mesmo nome, arquivos diferentes</h1>

    </div>
  );
}

export default App;
