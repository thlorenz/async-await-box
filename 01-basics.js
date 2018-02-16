'use strict'

/* eslint-disable no-unused-vars */

const { task } = require('./util')

async function getUserSync(id) {
  return { name: 'bob', id }
}

async function getUser(id) {
  const userJSON = await task({ result: JSON.stringify({ name: 'bob', id }) })
  const user = JSON.parse(userJSON)
  return user
}

(async () => {
  const user = getUser(2)
  // const user = getUserSync(2)

  // const user = await getUser(2)
  // const user = await getUserSync(2)

  console.log(user)
})()
