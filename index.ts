// Import required modules
import express, { Request, Response } from 'express';
import cors from 'cors';

// Initialize the Express app
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the GET endpoint
app.get('/', (req: Request, res: Response) => {
  // Prepare the response data
  const responseData = {
    email: 'marvellousmikeubani@gmail.com', 
    current_datetime: new Date().toISOString(), // Dynamically generated ISO 8601 timestamp
    github_url: 'https://github.com/MarvellousUbani/hng-stage0-api', // github url
  };

  // Send the JSON response
  res.status(200).json(responseData);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});