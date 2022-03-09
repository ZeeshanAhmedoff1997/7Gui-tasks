import React, { useState } from "react";
import TaskLayout from "../components/Layout/TaskLayout";
import MainLayout from "../components/Layout/MainLayout";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createUser, removeUser, updateUser, filterUsers } from "../redux/userSlice";
import { toast } from "react-toastify";

const UserPage = () => {
  const { filteredUsers, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const styles = { width: "30rem" };
  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
  });
  const [index, setIndex] = useState(null);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const reset = () => {
    setUser({
      ...user,
      firstName: null,
      lastName: null,
    });
    setIndex(null);
  };
  const onCreate = () => {
    if (validateUser().length === 0) {
      dispatch(createUser(user));
      toast.success("User Created Successfully");
      reset();
    } else {
      toast.error("User already Exist with same Name");
    }
  };

  const onClick = (key) => {
    setIndex(key);
    setUser(users[key]);
  };

  const validateUser = () => {
    return users.filter((u) =>
      u.firstName === user.firstName && u.lastName === user.lastName
        ? true
        : false
    );
  };

  const onUpdate = () => {
    dispatch(updateUser({key: index, user: user}));
    toast.success("Updated Successfully");
    reset();
  };

  const onUserDelete = () => {
    dispatch(removeUser({key: index}));
    toast.success("Deleted Successfully");
    reset();
  };
  const onFilter = ({ target }) => {
    const { value } = target
    dispatch(filterUsers(value))
  };

  return (
    <MainLayout>
      <TaskLayout headerText="User" styles={styles}>
        <div className="row user">
          <div className="col-md-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Filter</Form.Label>
                <Form.Control type="text" onChange={onFilter} placeholder="Enter name ... " />
                <Form.Text className="text-muted">
                  Filter out by name.
                </Form.Text>
              </Form.Group>
            </Form>
            <h6>User List</h6>
            <div
              style={{ height: "100px", overflow: "scroll" }}
              className="border border-2"
            >
              {filteredUsers.map((user, key) => (
                <div
                  key={key}
                  onClick={() => onClick(key)}
                  className={`clickable ${key === index && "bg-info"}`}
                >
                  {user.lastName}, {user.firstName}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-7">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First name ... "
                  name="firstName"
                  value={user.firstName || ""}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sir Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Surname ... "
                  name="lastName"
                  value={user.lastName || ""}
                  onChange={onChange}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <Button
            variant="success"
            onClick={onCreate}
            disabled={!user.firstName || !user.lastName}
          >
            create
          </Button>
          {console.log("index", index)}
          <Button variant="info" onClick={onUpdate}>
            update
          </Button>
          <Button variant="danger" onClick={onUserDelete}>
            delete
          </Button>
        </div>
      </TaskLayout>
    </MainLayout>
  );
};

export default UserPage;
