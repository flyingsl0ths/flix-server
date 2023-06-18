FROM node:20.3.0-alpine3.18

WORKDIR /api

COPY package.json .

RUN npm install

EXPOSE ${FLIX_SERVER_PORT}

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
