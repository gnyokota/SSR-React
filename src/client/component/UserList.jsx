import React, { useEffect, useState } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://react-ssr-api.herokuapp.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  console.log({ users })
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

const mapStateToProps = (state) => {
  users: state.users
}

export default UserList
