const express=require('express');

const app=express();

const postRoutes=require('./routes/post');

app.get("/",postRoutes.getPosts);

app.listen(4000)