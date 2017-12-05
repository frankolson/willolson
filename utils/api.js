// Vendor Assets
import { createClient } from 'contentful'

let client
let authorized

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
