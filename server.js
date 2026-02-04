import app from "./app.js"
const PORT=process.env.PORT || 3000;

app.listen(PORT,(err,data)=>{
    console.log("Server is running on port 3000");
});