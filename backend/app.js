import express from "express";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    
});


app.listen(PORT, () => console.log(`app is listening at port ${PORT}`));

export {app }