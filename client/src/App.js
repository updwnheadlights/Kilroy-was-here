import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from "axios"
import axios from 'axios';
import style from './style.scss'
import logo from './logo.png';

function App() {
  useEffect(() => {
    document.title = "Kilroy was here";
  }

  )
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [socialname, setSocialName] = useState("")
  const [social, setSocial] = useState("")
  const TITLE = 'My Page Title';

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })

  }, []);
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name, socialname: socialname, social: social
    }).then((response) => {
      setListOfUsers([...listOfUsers, { name: name, socialname: socialname, social: social }])
    });
  };
  return (
    <div className="App">

      <div className='logo'>
        <a href='https://rb.gy/enaq3a' target="_blank" >
          <img src={logo} alt="Kilroy was here" />
        </a>
        <h1>Inspired by the classic <a href='https://en.wikipedia.org/wiki/Kilroy_was_here' target="_blank">meme</a>, leave a mark that you were here!</h1>
      </div>
      <p></p>
      <div className='usersDisplay'>
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>{user.name} was here!</h1>
              <p>Find me on <a href={user.social} target="_blank">{user.socialname}</a></p>
            </div>
          );
        })}
      </div>
      <div className='input'>
        <h1>Sign me up!</h1>
        <input
          type="text"
          placeholder="Name *"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Twitter/GitHub/Reddit"
          onChange={(event) => {
            setSocialName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Link (with https://)"
          onChange={(event) => {
            setSocial(event.target.value);
          }}
        />
        <button onClick={createUser}>I was here!</button>
      </div>
      <div className='footer'>
        <p><a href="https://github.com/updwnheadlights" target="_blank">Source code</a></p>
        <p>Made by <a href="https://ayushdesai.carrd.co/" target="_blank">Ayush Desai</a></p>
      </div>
    </div >
  );
}

export default App;
