'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const users = []
  for (var i = 0; i < ids.length; i++) {
    const id = ids[i]
    const user = await task({ wait: 500 - (i * 200),  result: { name: `bob-${id}`, id } })
    users.push(user)
  }
  return users
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
