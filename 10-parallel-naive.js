'use strict'

const { task } = require('./util')

async function getUsers(id1, id2, id3) {
  const user1 = task({ result: { name: `bob-${id1}`, id1 } })
  const user2 = task({ result: { name: `bob-${id2}`, id2 } })
  const user3 = task({ result: { name: `bob-${id3}`, id3 } })
  return Promise.all([ user1, user2, user3 ])
}

(async () => {
  const users = await getUsers(1, 2, 3)
  console.log(users)
})()
