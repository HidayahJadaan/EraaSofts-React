import React from 'react'

export default function User({id, name, deleteUser,EditUser}) {
  return (
    <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>
      <button className='btn btn-info mx-2' onClick={()=>EditUser(id)}>EDIT</button>
      <button className='btn btn-danger' onClick={()=>deleteUser(id)}>DELETE</button>
    </td>
  </tr>
  )
}
