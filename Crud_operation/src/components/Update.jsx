import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/UserReducer';

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === Number(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : '');
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: Number(id),
        name: uname,
        email: uemail,
      })
    );
    navigate('/');
  };

  if (!existingUser) return <p className="text-center mt-5">User not found</p>;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 px-2">
      <div className="w-100 w-md-75 w-lg-50 border bg-secondary text-white p-4 p-md-5 rounded">
        <h3 className="mb-4">Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={uname}
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={uemail}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100 mt-3">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
