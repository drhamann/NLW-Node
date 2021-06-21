import express from "express";

const app = express();

/** 
 * GET => R
 * POST =>C
 * PUT =>U
 * DELETE =>D
 * PATCH =>US
 * 
 */
app.get("/test", (request, response) =>{
   return response.send("Olá NLW")
});

app.post("/test-post", (request, response) =>{
    return response.send("Olá NLW POST")
});

app.listen(3000, ()=> console.log("Server is running"));
