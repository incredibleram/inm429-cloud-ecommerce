FROM node:latest AS builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install && npm run ng build 

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
EXPOSE 80
COPY --from=builder app/dist/ecommerce-ng .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]