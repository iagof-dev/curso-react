// CSS da página
import { useState } from 'react';
import './App.css';

//Components
import ConditionalRender from './Components/ConditionalRender';
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';
import Fragments from './Components/Fragments';
import Container from './Components/Container';

//Imgs
import City from './assets/city.jpg';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';
import UserDetails from './Components/UserDetails';



function App() {

  // const nome = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "Preto", newCar: false, km: 100000 },
    { id: 3, brand: "Ford", color: "Vermelho", newCar: false, km: 235 },
    { id: 4, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
  ]
  
  function showMessage(){
    console.log("Evento do Componente pai");
  }

  const[message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const people = [
    {id: 0, name: "João",age: 56,job: "Mechanic", cnh: true},
    {id: 1, name: "Pedro", age: 49, job: "Doctor", cnh: true},
    {id: 2, name: "Matheus", age: 19, job: "Constructor", cnh: false},
    {id: 3, name: "Felipe", age: 15, job: "Student", cnh: false},

  ];

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <div>
        {/* img em public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* img em assets */}
        <img src={City} alt="Cidade" />
      </div>

      <div>
        <ManageData />
      </div>

      <div>
        <ListRender />
      </div>

      <div>
        <ConditionalRender />
      </div>

      <div>
        {/* props */}
        <ShowUserName name={userName} />
      </div>

      <div>
        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="azul" newCar={false} />
      </div>

      <div>
        {/* reaproveitando */}
        <CarDetails brand="Ford" km={0} color="vermelho" newCar={true} />
        <CarDetails brand="Fiat" km={200000} color="branco" newCar={false} />


        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
        ))}

      </div>

      <div>
        {/* fragments */}
        <Fragments propFragment="teste" />
      </div>


      <div>
        {/* prop children */}
        <Container myValue="testing">
          <p>e este é o conteudo do container</p>
        </Container>
        <Container myValue="testing 2">
          <h5>testando container</h5>
        </Container>
      </div>

      <div>
        {/* função em prop */}
          <ExecuteFunction myFunction={showMessage} />
      </div>

      <div>
        {/* state lift */}
          <Message msg={message}/>
          <ChangeMessageState handleMessage={handleMessage}/>
      </div>

      <div>
        {/* desafio 4*/}
        {people.map((people) => (
          <UserDetails key={people.id} name={people.brand} age={people.age} job={people.job} cnh={people.cnh} />
        ))}
      </div>

    </div>
  );
}

export default App;
