'use strict'

const { task } = require('./util')

async function getUsers(ids) {
  const users = []
  for (const id of ids) {
    const user = await task({ result: { name: `bob-${id}`, id } })
    users.push(user)
  }
  return users
}

async function getBatchUno() {
  console.log('Getting batch uno')
  const users = await getUsers([ 1, 2, 3 ])
  console.log('Got batch uno', users)
}

async function getBatchDos(ids) {
  console.log('Getting batch dos')
  const users = await getUsers([ 4, 5, 6 ])
  console.log('Got batch dos', users)
}

async function getBatchTres(ids) {
  console.log('Getting batch tres')
  const users = await getUsers([ 7, 8, 9 ])
  console.log('Got batch tres', users)
}

setTimeout(getBatchUno, 5)
setTimeout(getBatchDos, 10)
setTimeout(getBatchTres, 15)
