import './MyForm.css';

import { useState } from 'react';

const MyForm = ({ user }) => {

    // 6 - controlled input


    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');;

    const [role, setRole] = useState(user ? user.role : '');;

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulario...");
        console.log(name, email, bio, role);

        //validacao
        //envio

        // 7 - limpar formulario
        setName("");
        setEmail("");
        setBio("");
        setRole("");

    }

    return (
        <div>
            {/* 5 - envio de form */}
            {/* 1 - criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={user.name} />
                </div>

                {/* 2- label envolvendo o input */}
                <div>
                    <label>
                        {/* 4- Simplificação de manipulação de state */}
                        <span>E-mail:</span>
                        <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => { setEmail(e.target.value); }} value={user.email} />
                    </label>
                </div>
                {/* 8 - text area */}
                <label htmlFor="">Bio:</label>
                <textarea name="bio" placeholder='Descrição do Usuário' onChange={(e) => { setBio(e.target.value) }} value={user.bio}>
                </textarea>
                {/* 9 - select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => {setRole(e.target.value);}} value={user.role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm