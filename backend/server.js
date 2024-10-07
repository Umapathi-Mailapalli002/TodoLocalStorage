import express from "express";

const app = express();
const PORT = ProcessingInstruction.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    
});


app.listen(3000, () => console.log("app is listening at port 3000"));