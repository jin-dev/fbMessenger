import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input } from '@material-ui/core/';
import Message from './Message';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages] = useState([{username: 'jin', text: 'hey there'}, {username:'sophia', text: 'hi jin!'}]);
  const [username, setUsername] = useState('');

//  useState = variable in React;
// useEffect = run code on a condition in React

  useEffect( () => {
    //run code here
    // if its blank inside [], this code runs once when the app component loads
    // if we have a variable like input, it runs every time input change.

    //const name = prompt('Please enter your name');

    setUsername(prompt('Please enter your name'))
  }, [] ) // condition;

  
  
  const sendMessage = (event) => {
    event.preventDefault();
      setMessages([...messages, { username: username, text: input } ]);
      setInput('');
  }


  return (
    <div className="App">
        <h1> HAHA </h1>
        <h2> Welcom {username} </h2>
      <form>
        <FormControl>
          
          <InputLabel>Enter a message...</InputLabel>
         <input value={input} onChange={event => setInput(event.target.value)} />
         <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> Send Message</Button>
        </FormControl>
      </form>
    
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
