# Chatter
This is a realtime cross platform chat application prototype.

# Tools
We use TypeScript as primary language. The back-end is build in NodeJS. On the client side we use Mithril.

# Application Structure
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
