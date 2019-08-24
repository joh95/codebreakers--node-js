let server = require('./app/app');
let port = process.env.PORT || 3500;

server.listen(port, ()=>{
    console.log(`Server running CodeBreaker API on Port ${port}`);
    
});