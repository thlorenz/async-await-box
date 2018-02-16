'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const users = []
  for (const id of ids) {
    const user = await task({ result: { name: `bob-${id}`, id } })
    users.push(user)
  }
  return users
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()

// What happens if we don't await the task?
