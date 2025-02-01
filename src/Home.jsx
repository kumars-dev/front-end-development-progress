import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const deleteuser = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div className="outercontainer">
      <div className="container">
        <h1 className="display-1">Users List</h1>
        <Link to="/create" className="btn btn-success my-3">
          Create User +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`edit/${user.id}`}
                      type="button"
                      class="btn btn-primary"
                      style={{ marginRight: "6px" }}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteuser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="4" className="nofound">No Data Found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
