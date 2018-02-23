'use strict'

// https://github.com/sindresorhus/p-retry

const fetch = require('node-fetch')
const retry = require('p-retry')

const retries = process.env.RETRIES || 1

function tryFetch() {
  return fetch('http://localhost:5555')
}

async function fetchHelloWorld(retries) {
  try {
    return await retry(tryFetch, { retries })
  } catch (err) {
    err.retriesAttempted = retries
    throw err
  }
}

(async () => {
  try {
    const result = await fetchHelloWorld(retries)
    console.log({ status: result.status, statusText: result.statusText })
    result.body.pipe(process.stdout)
  } catch (err) {
    console.error(err)
  }
})()
