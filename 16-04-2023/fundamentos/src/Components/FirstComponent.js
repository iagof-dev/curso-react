//Comentario fora do componente
import MyComponent from './MyComponent';

const FirstComponent = () => {
    //Descrição de Componente
    return(
        <div>
            {/*Comentario dentro do componente */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu Texto</p>
            <MyComponent />
        </div>
    );

};



export default FirstComponent;