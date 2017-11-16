// Vendor Assets
import { createClient } from 'contentful'

const POST_CONTENT_TYPE_ID = 'hxov0fjpwrnp'

const client = createClient({
  space: 'hxov0fjpwrnp',
  accessToken: '08f3863d2c791d2e13653524181c83a2bd399a5abc170e2285ce7b48479e9b9c',
})

export const getPosts = client.getEntries({
  content_type: POST_CONTENT_TYPE_ID,
})
