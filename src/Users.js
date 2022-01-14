import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("init()");
    setUsers(["Raj", "Ram"]);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((vo) => (
        <li>{vo}</li>
      ))}
    </div>
  );
}

export default Users;
