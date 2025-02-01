import React from "react";
import { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const dispatch = useDispatch();
  const users= useSelector((state)=>state.users)
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
const navigate = useNavigate()
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
    // console.log(Math.ceil(Math.random(users.id)*10),'ididiidid')
    // console.log(users[users.length-1].id+1,'ididiidid')
    const idle = users.length>0?(users[users.length-1].id+1):1
    dispatch(addUser({id:idle,name:name,email:email}))
    navigate ('/');
  };
  return (
    <>
      <div className="createuser">
        <h2>Add new User</h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id=""
              aria-describedby="helpId"
              placeholder="eg:john"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id=""
            aria-describedby="emailHelpId"
            placeholder="eg:john@domain"
            onChange={(e) => setemail(e.target.value)}
          />
          <button type="submit" className="btn btn-info my-2">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
