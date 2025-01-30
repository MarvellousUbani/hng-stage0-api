# HNG Stage 0 API

A simple public REST API that returns basic information including an email address, current datetime in ISO 8601 format, and the GitHub repository URL.

## Live Demo

- Previous link [https://hng-stage0-api-8r3u.onrender.com/](https://hng-stage0-api-8r3u.onrender.com/)
- Current Link - [https://hngstage0-bruvaa.netlify.app/](https://hngstage0-bruvaa.netlify.app/) - Rehosted cos URL bot issues

## Features

- Returns JSON response with email, current datetime, and GitHub URL
- Implements CORS handling
- Deployed on Render for high availability
- Fast response time (< 500ms)

## API Documentation

### Endpoint

```
GET https://hng-stage0-api-8r3u.onrender.com/
```

### Response Format

```json
{
  "email": "marvellousmikeubani@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/MarvellousUbani/hng-stage0-api"
}
```

### Response Headers

- `Content-Type: application/json`
- `Status: 200 OK`

## Tech Stack

- Node.js/TypeScript
- Express.js
- CORS middleware
- Render (Deployment)

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MarvellousUbani/hng-stage0-api.git
cd hng-stage0-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## Project Structure

```
├── src/
│   └── index.ts    # Main application file
├── package.json
├── dist/
│   └── index.js  
├── tsconfig.json
└── README.md
```

## Testing

You can test the API using curl:

```bash
curl https://hng-stage0-api-8r3u.onrender.com/
```

Or using any HTTP client like Postman or your web browser.

## Deployment

This project is deployed on Render. For deployment:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - Build Command: `npm install`
   - Start Command: `npm start`

## Related Resources

- [HNG NodeJS Developers](https://hng.tech/hire/nodejs-developers)

## Author

Marvellous Ubani

## License

This project is open source and available under the [MIT License](LICENSE).