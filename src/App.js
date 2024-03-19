import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState("");
  const [passwordDirty, setPasswordDirty] = useState("");
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState("Password не может быть пустым");
  const [response, setResponce] = useState("");

  const login = async () => {
    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    });

    if (response.ok) {
        console.log('Login successful');
    } else {
        console.error('Login failed');
    }
};
  
  const buttonPressed = (e) => {
    if (email === "" || password === "") return
    login();
  }

  return (
    <div className='app'>

      <form>

        <h1>Регистрация</h1>
        <div style={{color: "red"}}>{emailError}</div>

        {(emailDirty && emailError) && <div >{response}</div>}

        <input onBlur={() => setEmailDirty(true)} name="email" type="email" placeholder="Email" 
        value={email} onChange={(e) => setEmail(e.target.value)} />

        {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
        <input onBlur={() => setPasswordDirty(true)} name="password" type="password" placeholder="Password" 
        value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" onMouseDown={buttonPressed}>Зарегистрироваться</button>

      </form>

    </div>
  );
}

export default App;
