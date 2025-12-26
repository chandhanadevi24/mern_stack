import express from "express";
const app=express();
app.use(express.json());
app.get("/",(req,res) =>{
    res.send("Hello");
    });
    app.post("/user",(req,res) =>{
        const data=req.body;
        res.json(data);
    });
    app.put("/put/:id",(req,res) =>{
        const id=req.params.id;
        const updateddata=req.body;
        res.json({
            message: `data with id $(id) updated successfully`,updateddata
        });
    });
    app.listen("5001",()=>
    {
        console.log("server is running on your port number");
    });