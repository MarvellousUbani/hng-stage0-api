import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  }

  // Handle OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  const responseData = {
    email: 'marvellousmikeubani@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/MarvellousUbani/hng-stage0-api'
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(responseData)
  }
}

export { handler }