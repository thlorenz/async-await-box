'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const users = []
  for (const id of ids) {
    const user = await task({ result: { name: `bob-${id}`, id } })
    if (id === 2) user.age = await task({ result: 22 })
    users.push(user)
  }
  return users
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
