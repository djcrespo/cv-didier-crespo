# build stage
FROM node:22.11.0-alpine3.20 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .

RUN npm run generate

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]