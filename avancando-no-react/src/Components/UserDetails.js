
function UserDetails(people) {
    return (
        <div>
            <ul>
                <li>Nome: {people.name}</li>
                <li>Idade: {people.age}</li>
                <li>Emprego: {people.job}</li>
                {people.age >= 18 ? (<li>Pode tirar CNH?: Sim</li>) : (<li>Pode tirar CNH?: Não</li>)}

            </ul>
        </div>
    )
}

export default UserDetails