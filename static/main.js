// client side

const socket = io('http://localhost:3000/')
const alertBox = document.getElementById('alert-box')
const messagesBox = document.getElementById('messages-box')
const messageInput = document.getElementById('message-input')
const sendBtn = document.getElementById('send-btn')

socket.on('welcome', msg => {
    console.log(msg)
})
socket.on('welcome2', msg => {
    console.log(msg)
})

sendBtn.addEventListener('click', () => {
    const message = messageInput.value
    console.log(message)

    socket.emit('message', message)
})

