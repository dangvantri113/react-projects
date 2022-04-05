import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const inputUsername = useRef();
  const inputAge = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = inputUsername.current.value;
    const enteredAge = inputAge.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({title: 'Invalid input', message: 'Please enter valid input for username and age (non-empty)'})
      return;
    }

    if (parseInt(enteredAge) < 1) {
        setError({title: 'Invalid age', message: 'Please enter valid age (>0)'})

      return;
    }

    props.onAddUser({ name: enteredUsername, age: enteredAge });
    console.log("username", enteredUsername);
    console.log("age", enteredAge);

    inputUsername.current.value = '';
    inputAge.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorConfirm={errorHandler}
        />
      )}
      <Card className={classes["add-user-container"]}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            ref={inputUsername}
            
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            ref={inputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
