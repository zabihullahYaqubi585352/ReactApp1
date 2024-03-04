import { useState } from "react";
import "./App.css";
import AddUser from "./Components/User/AddUser.js";
import UsersList from "./Components/User/UsersList";
function App() {
  const [UserList, setUserList]= useState([]);

const UserListHandler=(uName, uAge)=>{
setUserList((preUsersList)=>{
  return [...preUsersList,{name:uName, age:uAge , id:Math.random().toString()}, 
  ];

});
};
  return (
    <div>
      <AddUser onAddUser={UserListHandler}/>
      <UsersList user={UserList}/>
    </div>
  );
}

export default App;
