FROM node:16.10-slim

# setting working directory
WORKDIR /app

# installing dependencies
COPY . /app

#  running app
RUN npm install

#  setting port
EXPOSE 3000

# strat app
CMD ["npm start"]