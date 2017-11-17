// Vendor Assets
import { createClient } from 'contentful'

let client
let authorized

const sortPosts = (a, b) => {
  if (a.createdAt < b.createdAt) {
    return 1
  } else if (a.createdAt > b.createdAt) {
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

export const getPosts = () => (
  getClient().getEntries({
    content_type: 'post',
  }).then(payload => (
    payload.items.reduce((arr, cur) => {
      arr.push({
        ...cur.fields,
        createdAt: cur.sys.createdAt,
      })
      return arr
    }, []).sort(sortPosts)
  ))
)
