# RealTimeChatApp

Stack used: Node.js, Express.js and socket.io

Functionalities:
1.Recieve and send real time messages by joiining into a chat room.
2.User gets notified when someone joins or leave the group.
3.It shows number of active users.
4.It has a chat scroll functionality.

Dependencies:

server side:
npm init -y (to initialise package .json)
npm i --save cors nodemon express socket.io

client side :
npm i --save react-router socket.io-client react-scroll-to-bottom react-emoji query-string react-router-dom

How to start on your Local:
1.cd over to client and server in Install all above dependencies.
2.cd over to client and run , npm start.This will trigger React App which is the client side.
3.cd over to server and run , nodemon index.js.This will trigger server side of the Application.
