import express from "express";
import http from "http";
import sequelize from "sequelize";
import pkg from 'pg';
const {Pool} = pkg;
import cors from "cors";
import path from "path"; 
// import studentsRoutes from "./src/students/routes.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const server = http.createServer(app);

let item = [];
const corsOption = {
    origin: "http://localhost:3000", // Adjust to your frontend server origin
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded instead of bodyParser
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public'))); // Ensure the correct path for static files
import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize('name', {
  host: 'localhost',
  dialect: 'postgres'
});

async function connectToDatabase() {
    
    try {
        await sequelizeInstance.authenticate();
        console.log('Connection has been established successfully.');
        return sequelizeInstance;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


connectToDatabase();
// Dene the route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'index.html')); 
});
// app.use("/students", studentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server startup message
});
