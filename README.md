# Chatter
This is a realtime cross platform chat application prototype.

# Tools
The back-end is build in NodeJS and written in TypeScript
The client app is build with Mithril and TypeScript
The app is bundled with Webpack

# Application Structure
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
