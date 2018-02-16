'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const users = []
  var i = 0
  while (i < ids.length) {
    const id = ids[i]
    const user = await task({ result: { name: `bob-${id}`, id } })
    users.push(user)
    i++
  }
  return users
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
