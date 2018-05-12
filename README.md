# Chatter
This is a realtime cross platform chat application prototype.

### Tools
On the back-end we are running a NodeJS width Express app. The client app will be build with Mithril. The code for both the server and client apps will be written in TypeScript.

For realtime communication between multiple client apps and the server Socket.io is implemented.

### Application Structure
```
Chatapp/
|-  Server/
    |-  src/
        |-  models
            |-  message.model.ts
            |-  user.model.ts
        |-  index.ts
        |-  server.ts
    |-  package.json
    |-  tsconfig.json
    |-  webpack.config.json
|-  Client/
    |-  src/
            |- chat/
                |-  model/
                    |-  user.ts
                    |-  message.ts
                |-  services/
                    |-  socket.service.ts
            |- app.module.ts
        |-  index.ts
    |-  package.json
    |-  tsconfig.json
    |-  webpack.config.json
    
```
