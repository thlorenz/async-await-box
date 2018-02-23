'use strict'

// https://github.com/sindresorhus/p-memoize

const { task } = require('./util')

const memoize = require('p-memoize')

/* eslint-disable no-unused-vars */

async function getUser(id) {
  return task({ result: { name: `bob-${id}`, id } })
}
const getUserMemoized = memoize(getUser)

async function getUserMulti(id) {
  const user1 = await getUser(id)
  const user2 = await getUser(id)
  const user3 = await getUser(id)
  return [ user1, user2, user3 ]
}

async function getUserMultiMemoized(id) {
  const user1 = await getUserMemoized(id)
  const user2 = await getUserMemoized(id)
  const user3 = await getUserMemoized(id)
  return [ user1, user2, user3 ]
}

(async () => {
  const users = await getUserMulti(1)
  // const users = await getUserMultiMemoized(1)
  console.log(users)
})()
