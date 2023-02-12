import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../action/actions'
import HelmetTags from './HelmetTags.jsx'

const UserList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(fetchUser())
    }
    fetchUsers()
  }, [])

  const usersList = useSelector((state) => state.users.data)

  return (
    <div>
      <HelmetTags title="SSR users list" />
      <h1>Here is a list of users:</h1>
      {usersList.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default UserList
