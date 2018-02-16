'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const tasks = ids.map(id => task({ result: { name: `bob-${id}`, id }, wait: 10000 }))
  return Promise.all(tasks)
}

(async () => {
  const ITER = 1E4
  const ids = new Array(ITER)
  for (var i = 0; i < ITER; i++) ids[i] = i

  const users = await getUsers(ids)
  console.log(users)
})()
