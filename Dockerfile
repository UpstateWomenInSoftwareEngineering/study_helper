FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Using a custom port to avoid conflicts with the other applications - @kmansel
EXPOSE 4013

# Start the server
CMD ["node", "server.js"]
