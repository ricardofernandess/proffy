FROM node:12

COPY package*.json ./
COPY yarn* ./
COPY database.sqlite ./dist/src/database/
COPY . .

RUN yarn install

EXPOSE 3333

CMD [ "yarn", "prod" ]