'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const tasks = ids.map((id, idx) =>
    task({ wait: 500 - (200 * idx), result: { name: `bob-${id}`, id } })
  )
  return Promise.all(tasks)
}

(async () => {
  const users = await getUsers([ 1, 2, 3 ])
  console.log(users)
})()
