FROM node:16.10-alpine
WORKDIR /app
COPY package.json .
RUN npm install -g npm@7.24.0
RUN npm install --legacy-peer-deps
COPY . .
CMD [ "npm", "run", "web" ]