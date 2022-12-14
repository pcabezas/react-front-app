FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./front-app/package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3010