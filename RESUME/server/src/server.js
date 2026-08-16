const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

//local imports
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes');

//Api 
app.use('/api/auth', authRoutes);


//Initial test routes
app.get('/', (req,res) => {
    res.json({
        message: "HireLens Backend Running Successfully"
    })
})
app.get('/api/health', async(req,res) => {
    try{
        const [rows] = await pool.query("SELECT NOW() AS currentTime")
        res.json({
            status: "success",
            message: "Backend + Database connected successfully"
        })
    }catch(error){{
        console.error("Database error:",error);
        res.status(500).json({
            status: "error",
            message: "Internal server error"
        })
    }}
})

const PORT = process.env.PORT || 5009;

app.listen(PORT , () => {
    console.log(`Server Running Successfully on: http://localhost:${PORT}`)
})