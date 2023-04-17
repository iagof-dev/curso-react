import {useState} from 'react'

function ListRender() {

    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]); 

    const [users, setUsers] = useState([
        {id:1, name: "Matheus", age: 31},
        {id:2, name: "João", age: 28},
        {id:3, name: "Pedro", age: 44},
    ]);

    const deleteRandom = () => {
        const randomNum = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNum !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
             ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar usuário aleatorio</button>
    </div>
  )
}

export default ListRender