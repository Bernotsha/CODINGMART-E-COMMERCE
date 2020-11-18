const e = require("express");

class Router{
    constructor(app,pool){
        this.login(app,pool);
        this.isLoggedIn(app,pool);
        this.sign(app,pool);
        this.Cartproducts(app,pool);
        this.deleteproduct(app,pool);
        this.additemtocart(app,pool);
        this.customsearch(app,pool);
        this.addlikeitem(app,pool);
        this.showlikeproducts(app,pool);
        this.showHomeproducts(app,pool);
    }

    login(app,pool){
        app.post('/login',async(req,res) => {
            let username = req.body.username;
            let password = req.body.password;
            username = username.toLowerCase();
            if(username.length > 30 || password.length >30){
                res.json({
                    success: false,
                    msg: 'An errors occured, please try again'
                 
                })
                return;
            }
            let cols = [username];


            try {
                const client = await pool.connect();
                const result = await client.query("SELECT * FROM userlogin WHERE username = $1",cols);
                console.log(result);
                client.release();
                if(result.rowCount==1 && result.rows[0].password == password)
                {
                  res.json({
                      success:true,
                      username: username
                  }); 
                } 
                else{
                    res.json({
                        success:false,
                        msg: "Invalid account details"
                    });
                }              
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }

        })
    }
    
    showHomeproducts(app,pool){
        app.post('/showhomeproducts',async(req,res) => {
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM Homeproducts');
                client.release();
                console.log(result.rows);
                  res.json({
                      success:true,
                      msg: result.rows
                  });                
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }           
            })
    }
    showlikeproducts(app,pool){
 
        app.post('/showlikedproducts',async(req,res) => {
            let username = req.body.username;
            let cols=[username]            
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM likeproducts where username=$1' ,cols);
                client.release();
                  res.json({
                      success:true,
                      msg: result.rows
                  });                
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }
            
            })
    }

    customsearch(app,pool){
        
        app.post('/customsearch',async(req,res) => {
            console.log("Custom search");
            let txt = req.body.txt;
            if(txt=="")
            {
                txt="Homeproducts";
            }
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM '+txt);
                client.release();
                  res.json({
                      success:true,
                      msg: result.rows
                  });                
              } catch (err) {
                console.error(err);
              }
        })

    }

    additemtocart(app,pool){
        app.post('/additemtocart',async(req,res)=>{
            console.log(req.body.image);
            let image=req.body.image;
            let name=req.body.name;
            let prize = req.body.prize;
            console.log("Came here");
            let username =req.body.username;
            let cols=[name,prize,image,username]
            try {
                const client = await pool.connect();
                const result = await client.query('INSERT INTO Cartproducts(Name,Prize,Image,username) VALUES($1,$2,$3,$4)',cols);
                client.release();
                  res.json({
                      success:true,
                      msg: 'ITEM ADDED SUCCESSFULLY'
                  });                
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }
        })
    }


    addlikeitem(app,pool){
        app.post('/addlikeitem',async(req,res)=>{
            console.log(req.body.image);
            let image=req.body.image;
            let name=req.body.name;
            let prize = req.body.prize;
            let username =req.body.username;
            let cols=[name,prize,image,username]
            try {
                const client = await pool.connect();
                const result = await client.query('INSERT INTO likeproducts(Name,Prize,Image,username) VALUES($1,$2,$3,$4)',cols);
                client.release();
                  res.json({
                      success:true,
                      msg: 'ITEM ADDED SUCCESSFULLY'
                  });                
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }
        })
    }


    deleteproduct(app,pool){
        app.post('/deleteproduct',async(req,res) =>{
            console.log("Delete product called");
            let id =req.body.item;
            let cols=[id]
            try {
                const client = await pool.connect();
                const result = await client.query('DELETE FROM Cartproducts WHERE id=$1',cols);
                client.release();
                  res.json({
                      success:true,
                      msg: 'SUCCESSFULLY REMOVED'
                  });                
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }
        })
    }
    Cartproducts(app,pool){
        app.post('/cartproducts',async(req,res) => {
            let username = req.body.username;
            let cols=[username]
            try {
                const client = await pool.connect();
                const result = await client.query("SELECT * FROM Cartproducts where username=$1 ",cols);
                console.log(result);
                client.release();
                  res.json({
                      success:true,
                      msg: result.rows
                  });                
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }
            })
    }
    showTrendproducts(app,db){
        app.post('/showtrendproducts',(req,res) => {

            db.query('SELECT * FROM Trendproducts',function(err,result){
                if(err){
                    console.log(err)
                }
                res.json({
                    success:true,
                    msg: result,
                })
                return
            })
        
        })
    }
    sign(app,pool){
        app.post('/signup',async(req,res) => {
            let username = req.body.username;
            let password = req.body.password;
            let email = req.body.email;
            username = username.toLowerCase();
            if(username.length > 100 || password.length >100){
                res.json({
                    success: false,
                    msg: 'An errors occured, please try again3'
                 
                })
                return;
            }

            let cols = [username,password,email];
            let cols1 = [username,password];
            try {
                const client = await pool.connect();
                const result = await client.query('insert into usersignup (username,password,email) values ($1,$2,$3)',cols);
                const result1 = await client.query('insert into userlogin (username,password) values ($1,$2)',cols1);

                client.release();
                res.json({
                    success: false,
                    msg:'Successfully Registered Now Login',
                })               
              } catch (err) {
                console.error(err);
                res.send("Error " + err);
              }

        })
    }
    isLoggedIn(app,pool){
        app.post('/isLoggedIn',(req,res)=>{
                        res.json({
                            success: false
                        })
        });
    }
}
module.exports = Router;