import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

// defining that it will be an array of objects
//note is optional 
export interface IState {
  people:{
    name: string,
    age: number,
    url: string,
    note?:string 
  }[]
}

function App() {

  // defining objects, which will be array of object 
  // why people in square brackets?
  const [people, setPeople] = useState<IState["people"]>([{
    name: "Georg Ekeberg",
    url: "https://cdn.mos.cms.futurecdn.net/QzQjr2nZV7ARP3DW2WGXa8.jpg",
    age: 31,
    note: "I like to boogie"
  },
  {
    name: "Mikael Carlstein",
    url: "http://nyfiketlyssna.verobalans.se/WP-content/uploads/2017/05/rumpnisse_54e3c43bddf2b3035d2a1f70.jpg",
    age: 30,
    note: "I like chicks and booze"
  },
  {
    name: "Zlatan Ibrahimović",
    url: "https://akamai.vgc.no/v2/images/27437fc3-dde2-4dea-9144-79a3639e536e?fit=crop&h=1300&w=1900&s=a6601088661907b232c06ef9ad1418c735e23332",
    age: 40,
    note: "I to kick em balls"
  },
  {
    name: "Cristiano Ronaldo",
    url: "data:image/jpeg;base64,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",
    age: 36,
    note: "I like to annnoy people"
  }
])

// map through people 
// people.map(person => {
//   person.name
// })

//list components is like hey I am not expecting ny props
  return (
    <div className="App">
        <h1>People invited to our party</h1>
        <List people={people}/>
        <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
