FROM node:latest
LABEL description="super simple example I needed repeatedly to test various docker network configs"

ADD server.js server.js
RUN npm install express

CMD node server.js