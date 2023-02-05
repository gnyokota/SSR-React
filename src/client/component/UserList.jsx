import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/actions'

const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const dispatch = useDispatch()
    const dispatchFetchUsers = () => dispatch({ type: fetchUsers })
    dispatchFetchUsers()
    setUsers(useSelector((state) => state.users))
  }, [])

  return (
    <div>
      <h1>Here is a list of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default UserList
