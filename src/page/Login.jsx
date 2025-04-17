import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    console.log('Contraseña enviada al servidor:', password); // Para depurar que la contraseña enviada es la correcta
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Si el login es exitoso, almacenar el token en localStorage
        localStorage.setItem('token', data.token);
        navigate('/'); // Redirigir al dashboard
      } else {
        setError(data.message); // Mostrar error si no es exitoso
      }
    } catch (err) {
      console.error('Error de conexión:', err);
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión {console.log(password)}</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
