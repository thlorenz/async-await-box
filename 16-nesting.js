'use strict'

const { task } = require('./util')

async function doubleCheckIDValid(id) {
  const checkedOut = await task({ result: typeof id === 'number' })
  if (!checkedOut) throw new Error(`ID ${id} isn't even a number!`)
  return true
}

async function maybeGetUser(id) {
  const validID = await task({ result: await doubleCheckIDValid(id) && id > 0 })
  return validID ? await task({ result: { name: `bob-${id}`, id } }) : null
}

async function getUser(id) {
  const user = await maybeGetUser(id)
  return user
}

(async () => {
  try {
    const user = await getUser(2)
    console.log(user)
  } catch (err) {
    console.error(err)
  }
})()
