'use strict'

const { task, sleep } = require('./util')

async function getUsers(ids) {
  const tasks = ids.map(id => task({ result: { name: `bob-${id}`, id }, wait: 10000 }))
  return Promise.all(tasks)
}

const batchSize = 1E4 / 10

;(async function startCreatingPromises() {
  const ITER = 1E4
  const ids = new Array(ITER)
  for (var i = 0; i < ITER; i++) {
    if (i % batchSize === 0) await sleep(2000)
    ids[i] = i
  }

  const users = await getUsers(ids)
  console.log(users)
})()
