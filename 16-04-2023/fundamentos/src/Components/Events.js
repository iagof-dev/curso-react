const Events = () => {

    const handleMyEvent = (e) => {
        console.log("Evento ativado!");
        console.log(e);
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>;
        }
        else{
            return <h1>Renderizando outra coisa</h1>;
        }
    }

    return(
        <div>
            <div>
                {/* se colocar () ele vai executar automaticamente a função
                e não quando clicar no botão */}
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui também!</button>
                <button onClick={() => {if(true){console.log("Isso não deveria existir =(");}}}>Clica aqui, por favor</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}


        </div>
    );
};

export default Events;