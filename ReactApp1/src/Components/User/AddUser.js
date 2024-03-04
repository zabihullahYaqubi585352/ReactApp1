import React, { useState } from "react";
import Card from "../Ul/Card";
import classes from "./AddUser.module.css";
import Button from "../Ul/Button";
const AddUser = (props) => {
  const [UserName, setUserName] = useState("");
  const [Age, setAge] = useState("");

  const UserNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const AddUserHandler = (event) => {
    if (UserName.trim().length ===0 || Age.trim().length === 0) {
      return;
    }
    if (+Age < 1) {
      return;
    }
    event.preventDefault();
props.onAddUser(UserName,Age);
    setAge("");
    setUserName("");
 
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="UserName">UserName</label>
        <input
          type="text"
          id="UserName"
          value={UserName}
          onChange={UserNameChangeHandler}
        ></input>
        <label htmlFor="Age">Age(Year)</label>
        <input
          type="number"
          id="number"
          value={Age}
          onChange={AgeChangeHandler}
        ></input>
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
};
export default AddUser;
