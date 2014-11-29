FROM dockerfile/nodejs:latest

ADD . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV production

EXPOSE 3000
CMD ["node", "app.js"]