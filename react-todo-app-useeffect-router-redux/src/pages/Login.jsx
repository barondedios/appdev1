import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailed } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // FAKE AUTH — accepts only 1 user
    if (email === "admin@example.com" && password === "123456") {
      dispatch(loginSuccess({ email }));
      navigate("/todos"); // Redirect after login
    } else {
      dispatch(loginFailed());
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br/>
          <input
            type="email"
            value={email}
            placeholder="admin@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label><br/>
          <input
            type="password"
            value={password}
            placeholder="123456"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>
      </form>

      <br />
      <a href="/">Back to Home</a>
    </div>
  );
}
