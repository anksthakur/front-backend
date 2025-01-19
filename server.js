
import express from "express"
const app = express()

// app.get('/', (req, res) => {
//   res.send('Server is running')
// })
app.get('/api/people',(req,res)=>{
const data = [
  {
    id:1,
    name: "Molecule Man",
    age: 29,
  },
  {
    id:2,
    name: "Madame Uppercut",
    age: 39,
  }
]
res.send(data);
})

const port = process.env.PORT || 3001;

app.listen( port , ()=>{
console.log(`server running on ${port}`)
})