'use strict'

const { task } = require('./util')

// NOTE: this does not work either 😶

async function getUsers(ids) {
  const users = await ids.map(async id => {
    const user = await task({ result: { name: `bob-${id}`, id } })
    console.log('resolved', user)
    return user
  })
  return users
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
