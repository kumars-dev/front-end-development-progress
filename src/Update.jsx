import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
  const { id } = useParams(); //useParam hook used to get id from the URL like if i'm accessing the id =2 from homepage it will console in update page that id =2 data has been fetched or page is fetched by the id
  // console.log(id,'ididiiddidiupdate')

  const users = useSelector((state) => state.users);
  console.log(users);

  const exitinguser = users.filter((f) => f.id == id);
  const { name, email } = exitinguser[0];
  const [uname, setuname] = useState(name);
  const [uemail, setuemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleupdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate('/')
  };
  return (
    <>
      <div className="form-group">
        <h2>Update User</h2>
        <form onSubmit={handleupdate}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={uname}
              id=""
              aria-describedby="helpId"
              placeholder="Name"
              onChange={(e) => setuname(e.target.value)}
            />
          </div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={uemail}
            id=""
            aria-describedby="emailHelpId"
            placeholder=""
            onChange={(e) => setuemail(e.target.value)}
          />
          <button type="submit" className="btn btn-info my-2">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
