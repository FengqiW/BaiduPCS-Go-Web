FROM node:8-alpine as build-stage
ARG VUE_APP_REQUEST_URL=http://localhost:3001
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN echo VUE_APP_REQUEST_URL=$VUE_APP_REQUEST_URL > .env
RUN cat .env
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]