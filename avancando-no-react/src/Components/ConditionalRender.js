import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Fabio");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            {!x && <p>Agora x é falso</p>}

            {name === "João" ? (
                <div>
                    <p>O nome é joão</p>
                </div>
            ) :(
                <div>
                    <p>Não encontrado!</p>
                </div>
            )
    }
    <button onClick={() => {setName("João")}}>Alterar</button>
        </div>
    )
}

export default ConditionalRender