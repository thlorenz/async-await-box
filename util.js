'use strict'

const debugTask = require('debug')('task')

function task({ wait = 10, result = null, error = null }) {
  const taskInfo = { wait, result }
  const promise = new Promise((resolve, reject) => {
    debugTask('[executing]', taskInfo)

    if (error != null) {
      setTimeout(() => {
        debugTask('[rejecting]', taskInfo)
        reject(new Error(error))
      }, wait)
    } else {
      setTimeout(() => {
        debugTask('[resolving]', taskInfo)
        resolve(result)
      }, wait)
    }
  })
  return promise
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function stayAlive() {
  setInterval(() => process.stdout.write('.'), 1000)
}
if (process.env.LIVE === '1') stayAlive()

module.exports = { task, sleep, stayAlive }
