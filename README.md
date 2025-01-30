# HNG Stage 0 Backend API

This is a simple public API that returns basic information in JSON format.

## Features
- Returns the registered email address.
- Returns the current datetime in ISO 8601 format.
- Returns the GitHub URL of the project.

## API Documentation

### Endpoint
- **GET** `/`

### Response Format
```json
{
  "email": "marvellousmikeubani@gmail.com",
  "current_datetime": "2025-10-05T12:34:56.789Z",
  "github_url": "https://github.com/MarvellousUbani/hng-stage0-api"
}
