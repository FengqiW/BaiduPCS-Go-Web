FROM node:8-alpine as build-stage
ARG VUE_APP_REQUEST_URL=http://localhost:3001
ENV VUE_APP_REQUEST_URL=$VUE_APP_REQUEST_URL

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN echo $VUE_APP_REQUEST_URL
RUN echo VUE_APP_REQUEST_URL=$VUE_APP_REQUEST_URL > .env
RUN cat .env
COPY . .
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]