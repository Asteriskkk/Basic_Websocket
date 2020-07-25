let socket = io()
socket.on('connect',function(){
    socket.emit('createMessage',{
        from:"piush",
        text:"how are you."
    })
})
socket.on('disconnect',function(){
    alert('disconnected from server.')
})

socket.on('sendMessage',function(message){
    console.log(`messge ${JSON.stringify(message)}`)
    document.getElementById('incoming').innerHTML=JSON.stringify(message)
})

