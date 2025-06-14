import { useState, useEffect } from 'react';
import './App.css'
import { Grid } from "@mui/material";
import UserCard from './components/userCard';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched users:", data.users); // 👈 Add this
      setUsers(data.users);
    });
}, []);
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user._id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
