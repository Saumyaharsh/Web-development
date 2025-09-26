const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const {generateMessage} = require('./utils/messages')
const {generateLocationMessage} = require('./utils/messages')
const {addUser, removeUser,getUsersInRoom, getUser} = require('./utils/users')

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app) // create new web server
const io = socketio(server)
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{
    console.log('new websocket connection')
   
   
    
    socket.on('join',(options,callback)=>{
        const{error,user} = addUser({id:socket.id, ...options})
        if(error){
          return  callback(error)
        }

        socket.join(user.room)
 
        socket.emit('message',generateMessage('Admin','Welcome!'))
         socket.broadcast.to(user.room).emit('message',generateMessage('Admin',`${user.username} has joined!`))
         io.to(user.room).emit('roomData',{
            room:user.room,
            users:getUsersInRoom(user.room)
         })
         callback()
    })
    socket.on('sendMessage',(msg,callback)=>{
        const user = getUser(socket.id)
       const filter = new Filter()
       if(filter.isProfane(msg)){
           return callback('Profanity is not allowed')
        }
        io.to(user.room).emit('message',generateMessage(user.username,msg))
        callback()
    })
    socket.on('disconnect',()=>{
      const user =   removeUser(socket.id)
      if(user){
        
    io.to(user.room).emit('message',generateMessage('Admin',`${user.username} has left`))
    io.to(user.room).emit('roomData',{
        room:user.room,
        users: getUsersInRoom(user.room)
    })
      }
        
    })
    socket.on('sendLocation',(data,callback)=>{
        const user = getUser(socket.id)
        const latitude = data.coords.latitude
        const longitude = data.coords.longitude
       // const message = 'https://google.com/maps?q='+latitude+','+longitude
       io.to(user.room).emit('locationMessage',generateLocationMessage(user.username,'https://google.com/maps?q='+latitude+','+longitude))
      callback()
    })
})
server.listen(port,()=>{console.log('app is on port '+port)})
