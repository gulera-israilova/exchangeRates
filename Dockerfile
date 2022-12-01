FROM node:18.12.1-alpine

WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "run", "start" ]