import "./App.css";
import PageTitle from "./components/PageTitle";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import AddUser from "./components/AddUser";
import User from "./components/User";
import { useState } from "react";
import UpdateUser from "./components/UpdateUser";
import UseLocalStorage from "./hooks/UseLocalStorage";


function App() {
  const [isEdit, setIsEdit] = useState(false);
const {addToLocalStorage, getFromLocalStorage} = UseLocalStorage();

  const[user, setEditUser] =useState("");
  const [users, setUsers] = useState(
getFromLocalStorage('users')
  );

  
  // [
  //   { id: 1, name: "Jawad" },
  //   { id: 2, name: "Jood" },
  //   { id: 3, name: "Kenan" },
  //   { id: 4, name: "Adam" },
  //   { id: 5, name: "Joulia" },
  //   { id: 6, name: "Hidayah" },
  // ]
  const storeUser = (data) => {
    console.log(data);
    setUsers((users) => [...users, data]);
    addToLocalStorage('users', [...users, data])
    // console.log(users);
  };

  const deleteUser = (id) => {
    const newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
    addToLocalStorage('users', newUsers)
  };
const EditUser = (id)=>{
  setIsEdit(true);
  let user = users.find((user)=> user.id ===id);

  setEditUser(user);

};

const updateUser = (name)=>{
  
  let updatedUsers = users.map((item)=>{
    if(item.id === user.id){
      user.name =name;
      return user;
    }
    return item;
  });

  console.log(name)
setIsEdit(false);
setUsers(updatedUsers);
addToLocalStorage('users', updatedUsers)
};
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <PageTitle title="ALL USERS" />

          {!isEdit ? 
          <AddUser storeUser={storeUser} />
           : <UpdateUser user={user} updateUser={updateUser} />
           }
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  deleteUser={deleteUser}
                  EditUser={EditUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
