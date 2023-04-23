FROM node:16.10-slim

# create a directory for the app
WORKDIR /app

# copy the package.json and package-lock.json files to the container
COPY package*.json ./

# install the app's dependencies
RUN npm install

# copy the rest of the app's files to the container
COPY . .

# expose the port
EXPOSE 3000

# start the app
CMD ["npm", "start"]