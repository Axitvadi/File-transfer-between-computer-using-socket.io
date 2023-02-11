# IP-based-file-transfer
File transfer based on IP 

In this demo, we will demonstrate how to use socket.io to transfer files from Admin`s computer to other computers

The first step is to copy the sender folder to the admin's computer

And the run ipconfig command in to cmd in get the ip of computer and put that add create your connection URL

Suppose your computer IP is 192.168.0.45, and your server is running on port 3000 in the local environment, then the connection URL is 'http://192.168.0.45:3000'.

Include the above url in the environment file of the receiver

Copy receiver folder to users' computers and run receiver.js

And new file name test.pdf will add to receivers computer that are send from admin computer on connect .