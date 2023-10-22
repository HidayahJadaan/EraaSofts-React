import React, { useEffect } from "react";
import { useState } from "react";

export default function UpdateUser({user, updateUser}) {
    const [name, setName] = useState("");

useEffect(()=>{
    setName(user.name);

},[]);

const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name);
  };

  return (
    <form className="form border p-3 mb-3" onSubmit={handleSubmit} >
      <div className="mb-3">
        <label className="mb-3">Type User Name</label>
        <input
          type="text"
          value= {name}
          name="name"
          className="form-control"
          onChange={handleName}
        />
      </div>
      <button type="submit" className="btn btn-info">
        Update User
      </button>
    </form>
  );
}
