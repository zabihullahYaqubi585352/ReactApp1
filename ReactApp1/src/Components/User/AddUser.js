import React from "react";
import Card from "../Ul/Card";
import classes from"./AddUser.module.css";
const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="UserName">UserName</label>
        <input type="text" id="UserName"></input>
        <label htmlFor="Age">Age(Year)</label>
        <input type="number" id="number"></input>
        <button type="submit">AddUser</button>
      </form>
    </Card>
  );
};
export default AddUser;
