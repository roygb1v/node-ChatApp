const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Username and room must be provided!'
    }
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
    }
  }

  const user = { id, username, room }
  users.push(user)
  return { user }
}


const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id
  })

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  const user = users.find((user) => {
    return user.id === id
  })

  if (user) {
    return user
  }
  
  console.log('Unable to locate user!')
}

const getUsersInRoom = (room)  => {
  let userArray = []
  room = room.trim().toLowerCase()
  return users.filter((user) => user.room === room)
}


module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}
