const path = require('path')
const express = require('express')
const app = express()
const socketIO = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const publicPath = path.join(__dirname,'./public')

app.use(express.static(publicPath))

let io = socketIO(server)

io.on('connection',function(socket){
    console.log("new connection created")
    socket.on('disconnect',function(){
        console.log("user left the page")
    })

    socket.on('createMessage',function(message){
        console.log(`message ${JSON.stringify(message)}`)
    })
    setInterval(function(){
        socket.emit('sendMessage',Math.random(0,100)*100)
    },500)

})

const port = process.env.PORT || 3000
server.listen(port, () => { 
    console.log(`App listening on port ${port}!`);
});

