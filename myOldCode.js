const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs"); //library that will do encryption, to install 'npm i -s bcryptjs'
const app = express();


app.use(bodyParser.json())

app.set("APP_SECRET", process.env.APP_SECRET || 10); //  number is a length of salt

const  users = {}
app.post("/signup", bodyParser.json(), async (req, res) => {
  //handling function
  if (req.body.password && req.body.uname) {
    try {
      const hashedpw = await bcrypt.hash(
        users[rec.body.uname]={
            password: hashedpw
        }
        // req.body.password,
        // app.get("APP_SECRET")
      );
      console.log("Password hash:", hashedpw);
      res.status(200).send({ message: 'You signed up!' });
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    res.status(500); //if no password => bad request
  }
});

//send login and password if they match to those on the server => 
app.post('/login', async (req, res)=>{
    if(req.body.uname && req.body.password){
        try{
            const valid = await bcrypt.compare(users[uname].password, req.body.password)
            if(valid){
                res.status(200).send(`'Hello' ${req.body.uname}`)
            }else{
                res.status(530).send({message:'Not authorized'})
            }
        } catch(e){
            res.status(500).send({error: e})
        }
        
        
       
    }
})



app.listen(3000, () => {
  console.log("Hello", "http://localhost:3000");
});


//once a password is encrypted/hashed, we need to decrypt it