const Challenge = () => {

    const a = 10;
    const b = 20;

    const calcular = () => {
        return console.log(a+b);
    }

    return(
        <div>
            <h1>Desafio:</h1>
            <h2>A: {a}</h2>
            <h2>B: {b}</h2>
            <button onClick={calcular}>Calcular</button>
        </div>
    );

}

export default Challenge;