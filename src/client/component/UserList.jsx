import React, { useEffect, useState } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://react-ssr-api.herokuapp.com/users')
      const usersList = await res.json()
      setUsers(usersList)
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Here is a list of users:</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default UserList
