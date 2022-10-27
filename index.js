const express =require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;


app.use(cors());
const catagories=require('./data/catagories.json');
const news=require('./data/news.json');
const courses=require('./data/courses.json');

//app.get('/',(req,res)=>{
//     res.send('News api running');
// })

  
app.get('/news-catagory', (req,res)=>{
    
    res.send(catagories);
})
app.get('/courses', (req,res)=>{
    
    res.send(courses);
})

app.get('/courses/:id', (req,res)=>{
    const id=req.params.id;
    const catagory_news= courses.find(n=>n.id==id)
    res.send(catagory_news);
    
})

 app.get('/news',(req,res)=>{
    res.send(news);
 })

app.get('/news/:id', (req,res)=>{
    const id=req.params.id;
    const selected_news=news.find(n=>n._id===id)
    res.send(selected_news);
})
app.listen(port,()=>{
    console.log("run");
})