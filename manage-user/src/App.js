import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const initialUsers = [{ name: "tri", age: 25 }];
  const [users, setUsers] = useState(initialUsers);
  const addUserHandler = (user) => {
    setUsers((previousUsers) => [...previousUsers, user]);
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
