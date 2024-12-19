import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?page=2&results=6&seed=abc"
      );
      setUsers(response.data.results);
      console.log(response.data.results);
    };

    fetchUsers();
  }, []);

  if (!users) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-blue-200 to-cyan-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
