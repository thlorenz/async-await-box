'use strict'

/* eslint-disable no-unused-vars */

const { task } = require('./util')

const delay = require('delay')
const runAll = require('p-all')

async function delayExecution(time) {
  console.time('delay')
  await delay(time)
  console.timeEnd('delay')
}

async function all(concurrency) {
  const ids = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  const tasks = ids.map(id =>
    // So called Promise getters b/c promises execute eagerly and to
    // limit memory overhead from promise objects
    () => task({ result: { name: `bob-${id}`, id }, wait: 100 })
  )
  return runAll(tasks, { concurrency })
}

(async () => {
  delayExecution(100)
})()
