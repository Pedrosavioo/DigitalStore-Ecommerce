# Etapa de build
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Servindo com Nginx
FROM nginx:alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]