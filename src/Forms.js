import React from "react";
import '../src/Forms.css';


export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const[keyword, setKeyword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Keyword:${keyword}
      Message: ${message}
    `);
    
    event.preventDefault()
    
  }

  


  return (
    <form onSubmit={handleSubmit}>
      <h1>Facebook Scrap</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <label>
        Keyword:
        <input
          name="name"
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          required />
      </label>

      <label>
        Message:
        <textarea
          name="textarea"
          type="textarea"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required />
      </label>


      <button>Submit</button>
    </form>
  );
}

