"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Initialize the Express app
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Enable CORS
app.use((0, cors_1.default)());
// Define the GET endpoint
app.get('/', (req, res) => {
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
