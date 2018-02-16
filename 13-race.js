'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const tasks = ids.map(id => task({ result: { name: `bob-${id}`, id } }))
  return Promise.race(tasks)
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
