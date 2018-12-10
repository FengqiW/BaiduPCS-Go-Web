FROM node:8-alpine
ARG APP_PASSWORD=YourPassword
ENV APP_PASSWORD=$APP_PASSWORD

RUN mkdir /app
WORKDIR /app
ADD package.json /app

RUN npm i

ADD . /app
RUN chmod u+x ./BaiduPCS-Go

CMD [ "npm", "start" ]
