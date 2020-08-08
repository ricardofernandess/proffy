FROM node:12

COPY package*.json ./
COPY yarn* ./
COPY . .

RUN yarn global add serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]