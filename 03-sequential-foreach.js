'use strict'

const { task } = require('./util')

// NOTE: this does not work and we'll see why 😎

async function getUsers(ids) {
  const users = []
  await ids.forEach(async id => {
    const user = await task({ result: { name: `bob-${id}`, id } })
    console.log('resolved', user)
    users.push(user)
  })
  return users
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
