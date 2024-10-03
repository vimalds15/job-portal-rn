const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes.js");
const companyRoutes = require("./routes/companyRoutes.js");
const jobRoutes = require("./routes/jobRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const applicationRoutes = require("./routes/applicationRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    return res.status(200).json({message:"Yes, API is working!!"})
})

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/application", applicationRoutes);

module.exports = app;
