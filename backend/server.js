
const express=require('express');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/recommend',(req, res)=>{
    console.log('Request.body:', req.body);
    const {results, budget, goal, freedom }=req.body;

    let scorePrivate=0;
    let scoreGov=0;

    //simple scoring logic
    if(results === 'high') scoreGov +=2;
    //if(results === 'low') scorePrivate +=1;
    if(budget === 'yes') scorePrivate +=2;
    //if(budget === 'no') scoreGov +=1;
    if(goal === 'job') scorePrivate +=2;
    if(goal === 'research') scoreGov +=2;
    if(freedom === 'high') scorePrivate +=2;
    if(freedom === 'low') scoreGov +=1;

    const recommendation = scorePrivate > scoreGov
        ?"You are more suitable for a Private Degree."
        :"You are better off choosing a Government University Degree.";

    res.json({message: recommendation });
});


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});