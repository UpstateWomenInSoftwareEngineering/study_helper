FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install, --mount=type=secret,id=OPENAI_API_KEY \
  export OPENAI_API_KEY=$(cat /run/secrets/OPENAI_API_KEY)

COPY . .

# Using a custom port to avoid conflicts with the other applications - @kmansel
EXPOSE 4013

# Start the server
CMD ["node", "server.js"]
