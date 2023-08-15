const express = require("express")
const app = express();

//http://localhost:8080/
app.get("/", (req, res) => {
    res.json({message:"welcom to itd120 application"});
});

const PORT = 8080;//สร้างตัวเเปล;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});