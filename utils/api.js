// Vendor Assets
import { createClient } from 'contentful'

let client
let authorized

const sortByStartDate = (a, b) => {
  if (a.startDate < b.startDate) {
    return 1
  } else if (a.startDate > b.startDate) {
    return -1
  }
  return 0
}

const sortById = (a, b) => {
  if (a.id > b.id) {
    return 1
  } else if (a.id < b.id) {
    return -1
  }
  return 0
}

export function initClient () {
  client = createClient({
    space: 'hxov0fjpwrnp',
    accessToken: '08f3863d2c791d2e13653524181c83a2bd399a5abc170e2285ce7b48479e9b9c',
  })
  return client.getSpace()
    .then(space => {
      authorized = true
      return space
    })
}

export const getClient = () => (
  authorized && client
)

export const getStuff = (stuff, sortType) => (
  getClient().getEntries({
    content_type: stuff,
  }).then(payload => (
    payload.items.reduce((arr, cur) => {
      arr.push({
        ...cur.fields,
      })
      return arr
    }, []).sort(sortType || sortById)
  ))
)
