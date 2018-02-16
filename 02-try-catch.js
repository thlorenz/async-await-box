'use strict'

const { task } = require('./util')

async function getUser(id, overrideJSON = null) {
  try {
    const result = overrideJSON == null ? JSON.stringify({ name: 'bob', id }) : overrideJSON
    const error = id === 1 ? new Error(`User with id ${id} does not exist`) : null

    const userJSON = await task({ error, result })

    return JSON.parse(userJSON)
  } catch (err) {
    console.error('Caught an error:', err)
  }
}

(async () => {
  const user = await getUser(2)

  console.log(user)
})()
