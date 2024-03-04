import React from "react";
import Card from "../Ul/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.user.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
